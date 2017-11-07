import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../../services/data.service';
import { ConfigService } from '../../services/config.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-inputarea',
  templateUrl: './inputarea.component.html',
  styleUrls: ['./inputarea.component.css']
})

export class InputareaComponent implements OnInit {

  isInputareaHidden: boolean = true;
  modelRelation: string;
  modelType: string;
  data: inputFormDataInfo[];
  classIndex: number;
  error: string;

  predictionReady: boolean = false;
  prediction: prodictionResult;
  modelName: string;  // defines which model needs, for getting model info, and posting prediction request 
 

  constructor(
    private dataService: DataService, 
    private configService: ConfigService,
    private messageService: MessageService
  ) { 
    this.messageService.listen().subscribe((m:any)=>{
      this.display();
    });
  }

  ngOnInit() {
    //this.display();
  }

display():void{
  this.modelName = this.configService.getSelectedModel();  //credit-g, credit-g-opt, iris
  if (!this.modelName || this.modelName.length <= 0) {
    this.isInputareaHidden = true;
  } else {
    this.isInputareaHidden = false;

    this.dataService.getInputForm(this.modelName).subscribe((formInfo) => {
      if (formInfo.error) {
        this.error = formInfo.error;
      } else {
        this.modelRelation = formInfo.modelRelation;
        this.modelType = formInfo.modelType;
        this.data = formInfo.data; // array of features
        this.classIndex = formInfo.data.length - 1;  // it's backend's job to make sure last one is the class in .arff(training dataset and structure file) 

      }
    });
  }
}
  onSubmit(formInput: any) {

    let _rawData: string[] = this.getSubmitData(formInput);
    console.log("raw data from page:");
    console.log(_rawData);

    let data: string[] = [];
    for (let i = 0; i < _rawData.length; i++) {
      if (this.data[i].options && this.data[i].options.length > 0) { // has option there, we need index of the option for the value text
        data.push(this.data[i].options.indexOf(_rawData[i]).toString());
      } else {
        data.push(_rawData[i]);
      }
    }

    console.log("processed data for model:");
    console.log(data);

    let body: any = {
      "modelType": "J48",
      "data": data
    }

    console.log("WATCH DATA...")

    console.log(data)
    this.dataService.postPredictRequest(this.modelName, body).subscribe((data) => {
      this.prediction = data;
      this.predictionReady = true;
      console.log(this.prediction);

      // get name based on pValue
      if (!this.prediction.error) {
        this.prediction.data.predictionName = this.data[this.classIndex].options[this.prediction.data.predictionValue];
        if (this.prediction.data.predictionConfidence == -99999) { // -99999 is not set, then don't show it
          this.prediction.data.predictionConfidence = null;
        }
      }
    })
  }


  private getSubmitData(formInput: any): string[] {
    let result: string[] = [];
    for (let key in formInput) {
      if (formInput.hasOwnProperty(key)) {
        if (formInput[key]) {
          result.push(formInput[key]);
        } else {
          result.push("?");  // for missing data, depends on if model can handle missing data, if not then UI need to make sure user type in some value
        }
      }
    }
    return result;
  }
}


interface inputFormDataInfo {
  'index': number,
  'name': string,
  'type': string,       // string, numeric, date, nominal
  'options': string[]
}
interface prodictionResult {
  "error": string,
  "data": {
    "predictionName": string,
    "predictionValue": number,
    "predictionConfidence": number
  }
}