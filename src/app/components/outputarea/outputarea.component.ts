import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-outputarea',
  templateUrl: './outputarea.component.html',
  styleUrls: ['./outputarea.component.css']
})
export class OutputareaComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

}
