import { Injectable } from '@angular/core';

enum SERVER_OPTIOIN{
  HEROKU, LOCAL
}

@Injectable()

export class ConfigService {

  private serverOption:SERVER_OPTIOIN = SERVER_OPTIOIN.HEROKU;    // here decise what kind of server to use, default use heroku
  private localServerPort: string = "8080";
  private selectedModel:string = null;

  constructor() { }
  getServerRootUrl():string{
    switch(this.serverOption){
      case SERVER_OPTIOIN.LOCAL: return "http://localhost:"+this.localServerPort+"";

      case SERVER_OPTIOIN.HEROKU: 
      default :return "https://maven-spring-weka.herokuapp.com";
    }
  }

  getApiUrl():string{
    return this.getServerRootUrl()+ "/api/predict/";
  }
  getServerPort() {
    return this.localServerPort;
  }

  setSelectedModel(modelName:string){
    this.selectedModel = modelName;
  }
  getSelectedModel():string{
    return this.selectedModel;
  }
}
