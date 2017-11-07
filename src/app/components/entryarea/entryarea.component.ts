import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "../../services/data.service";
import { ConfigService } from "../../services/config.service";
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-entryarea',
  templateUrl: './entryarea.component.html',
  styleUrls: ['./entryarea.component.css']
})
export class EntryareaComponent implements OnInit {

  @Output() onFilter:EventEmitter<any> = new EventEmitter();

  modelArray:string[];
  constructor(private dataService:DataService, 
    private configService:ConfigService, 
    private messageService:MessageService ) { }

  ngOnInit() {
   this.modelArray = [];
    this.dataService.getAllModel().subscribe(data => {
      for(let i=0; i<data.length; i++ ){
        this.modelArray.push(data[i]);
      }      
    });
    console.log("Available models ...")
    console.log(this.modelArray);
  }
  onSelectModelChange(index:number){
    
    if(index && index >= 0){
      this.configService.setSelectedModel(this.modelArray[index]);

    }else{
      this.configService.setSelectedModel("");
    }

    this.messageService.filter('SelectModelChange');
  }


}
