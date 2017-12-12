import { Injectable } from '@angular/core';

enum SERVER_OPTIOIN{
  HEROKU, LOCAL, APIGEE
}

@Injectable()

export class ConfigService {

  private serverOption:SERVER_OPTIOIN = SERVER_OPTIOIN.APIGEE;    // here decise what kind of server to use, default use heroku
  private localServerPort: string = "8080";
  private selectedModel:string = null;

  constructor() { }
  getServerRootUrl():string{
    switch(this.serverOption){
      case SERVER_OPTIOIN.LOCAL: return "http://localhost:"+this.localServerPort+"";
      case SERVER_OPTIOIN.HEROKU: return "https://maven-spring-weka.herokuapp.com";
      case SERVER_OPTIOIN.APIGEE: return "https://panyunkui2-eval-test.apigee.net/webweka";//"http://panyunkui2-eval-test.apigee.net/webweka";
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
