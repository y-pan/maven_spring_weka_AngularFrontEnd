import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

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

  postPredictRequest(modelName:string, requstBody:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ "headers": headers });
    
    let url:string = "http://localhost:8080/api/predict/"+modelName;
    console.log("posting: " + url);
    // {
    //   "modelType" : "J48",
    //   "data":[4.9,20,1.4,2.2]
    // }
    return this.http.post(url, requstBody, {headers:headers}).map(res => res.json());
  }
}
