import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-inputarea',
  templateUrl: './inputarea.component.html',
  styleUrls: ['./inputarea.component.css']
})

export class InputareaComponent implements OnInit {

  modelRelation:string;
  modelType:string;
  data:inputFormDataInfo[];
  classIndex:number;
  error:string;
  
  predictionReady:boolean = false;
  prediction:prodictionResult;
  modelName:string;  // defines which model needs, for getting model info, and posting prediction request 


  constructor(private dataService:DataService ) { }

  ngOnInit() {
    this.modelName = "iris";
    this.dataService.getInputForm(this.modelName).subscribe((formInfo) => {
      if(formInfo.error){
        this.error = formInfo.error;
      }else{
        this.modelRelation = formInfo.modelRelation;
        this.modelType = formInfo.modelType;
        this.data = formInfo.data; // array of features
        this.classIndex = formInfo.data.length - 1;  // it's backend's job to make sure last one is the class in .arff(training dataset and structure file) 
      
      }
      console.log(formInfo);

    })
  }

  
  onSubmit(formInput:any){

    let data:string[] = this.getSubmitData(formInput);
    let body:any = {
        "modelType" : "J48",
        "data":data
      }
    this.dataService.postPredictRequest(this.modelName, body).subscribe((data)=>{
      this.prediction = data;
      this.predictionReady = true;
      console.log(this.prediction);

      // get name based on pValue
      if(!this.prediction.error){
        this.prediction.data.predictionName = this.data[this.classIndex].options[this.prediction.data.predictionValue];        
        if(this.prediction.data.predictionConfidence == -99999){ // -99999 is not set, then don't show it
          this.prediction.data.predictionConfidence = null;
        }
      }
    })
  }

  private getSubmitData(formInput:any):any{
    let result:any = [];
    for(let key in formInput){
      if(formInput.hasOwnProperty(key)){
        if(formInput[key]){
          result.push(formInput[key]);
        }else{
          result.push("?");  // for missing data, depends on if model can handle missing data, if not then UI need to make sure user type in some value
        }
      }
    }
    return result;
  }
}


interface inputFormDataInfo{
  'index':number,
  'name':string,
  'type':string,
  'options':string[]
}
interface prodictionResult{
  "error": string,
  "data": {
      "predictionName": string,
      "predictionValue": number,
      "predictionConfidence": number
  }
}