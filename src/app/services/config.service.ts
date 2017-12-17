import { Injectable } from '@angular/core';

enum SERVER_OPTIOIN{
  HEROKU, LOCAL, APIGEE, APIGEE_WITH_APIKEY
}

@Injectable()

export class ConfigService {

  private serverOption:SERVER_OPTIOIN = SERVER_OPTIOIN.APIGEE_WITH_APIKEY;    // here decise what kind of server to use, default use heroku
  // private serverOption:SERVER_OPTIOIN = SERVER_OPTIOIN.APIGEE; 

  private localServerPort: string = "8080";
  private selectedModel:string = null;


  constructor() { }
  getServerRootUrl():string{
    switch(this.serverOption){
      case SERVER_OPTIOIN.LOCAL: return "http://localhost:"+this.localServerPort+"";
      case SERVER_OPTIOIN.HEROKU: return "https://maven-spring-weka.herokuapp.com";
      
      case SERVER_OPTIOIN.APIGEE: return "https://panyunkui2-eval-test.apigee.net/webweka";//"http://panyunkui2-eval-test.apigee.net/webweka";
      case SERVER_OPTIOIN.APIGEE_WITH_APIKEY: return "https://panyunkui2-eval-test.apigee.net/webweka_apikey";
      // "?apikey=C7vuDez16RaQIEcEL7pvGGAqa1GN9ZCx"
      default :return "https://maven-spring-weka.herokuapp.com";
    }
  }

  getApiKey():string{
    return "C7vuDez16RaQIEcEL7pvGGAqa1GN9ZCx"; // ?apikey=key
  }
  getApiUrl():string{
    return this.getServerRootUrl()+ "/api/predict/";
  }
  getApiUrlWithApikey(modelName:string):string{
    if(!modelName) { modelName = "";}
    switch(this.serverOption){
      case SERVER_OPTIOIN.APIGEE_WITH_APIKEY: return this.getServerRootUrl()+ "/api/predict/"+modelName + "?apikey=" + this.getApiKey();
      default: return this.getServerRootUrl()+ "/api/predict/"+modelName;
    }
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
