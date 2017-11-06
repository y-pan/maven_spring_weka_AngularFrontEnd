import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getInputForm(modelName:string){
    let url:string = "http://localhost:8080/api/predict/"+modelName;
    //url = "https://jsonplaceholder.typicode.com/posts";

    return this.http.get(url).map(res => res.json()); // get as json format  {error, data}
  }
}
