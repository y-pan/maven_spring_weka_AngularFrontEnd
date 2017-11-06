export class Config {
    serverPort:string = "8080";

    constructor(){}
    
    public getServerPort(){
        return this.serverPort;
    }
}