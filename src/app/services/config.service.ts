import { Injectable } from '@angular/core';
@Injectable()
export class ConfigService {

  private serverPort: string = "8080";
  private selectedModel:string = null;
  constructor() { }

  getServerPort() {
    return this.serverPort;
  }

  setSelectedModel(modelName:string){
    this.selectedModel = modelName;
  }
  getSelectedModel():string{
    return this.selectedModel;
  }
}
