import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import {ConfigService } from './config.service';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http, private configService:ConfigService) { 
    console.log('Data service connected...');
  }

  getAllModel(){
    //let url:string = this.configService.getApiUrl();
    let url:string = this.configService.getApiUrlWithApikey(null); // null will get all, put the model name if you want the specific model
    return this.http.get(url).map(res => res.json());
  }
  getInputForm(modelName:string){
    //let url:string = this.configService.getApiUrl()+modelName;//"http://localhost:8080/api/predict/"+modelName;
    let url:string = this.configService.getApiUrlWithApikey(modelName);
    return this.http.get(url).map(res => res.json()); // get as json format  {error, data}
  }

  postPredictRequest(modelName:string, requstBody:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ "headers": headers });
    //let url:string = this.configService.getApiUrl()+modelName;//"http://localhost:8080/api/predict/"+modelName;
    let url:string = this.configService.getApiUrlWithApikey(modelName);
    return this.http.post(url, requstBody, {headers:headers}).map(res => res.json());
  }
}
