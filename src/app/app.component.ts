import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to weka-api web!';
  description = "It's an ongoing personal project. Main idea is to build a web (front+back) to provide user-friendly weka prediction models. See how far I can go. So much fun!!!";
  architecture = {
    // _here_to_add_
    'backend': ['Java Spring boot','Weka'], 
    'frontend':['Angular 4', 'TypeScript'],
    'deployment':['Heroku','GitHub']
  }
}
