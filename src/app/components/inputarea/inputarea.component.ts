import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  constructor(private dataService:DataService ) { }

  ngOnInit() {
    this.dataService.getInputForm("iris").subscribe((formInfo) => {
      if(formInfo.error){
        this.error = formInfo.error;
      }else{
        this.modelRelation = formInfo.modelRelation;
        this.modelType = formInfo.modelType;
        this.data = formInfo.data; // array of features
        this.classIndex = formInfo.data.length - 1;  // assume the last one is always the class 
      }
      console.log(formInfo);

    })
  }

  setOption(value:any){
    console.log(value);
  }
  

}


interface inputFormDataInfo{
  'index':number,
  'name':string,
  'type':string,
  'options':string[]
}