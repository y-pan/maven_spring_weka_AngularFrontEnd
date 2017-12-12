import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to weka-api web';
  description = "It's an ongoing project. Main idea is to provide easy access to ML models.";
  architecture = {
    // _here_to_add_
    'backend': ['Java Spring boot','Weka'], 
    'frontend':['Angular 4', 'TypeScript'],
    'deployment':['Heroku','GitHub']
  }
}
