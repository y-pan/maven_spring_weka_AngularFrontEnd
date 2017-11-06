import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputareaComponent } from './components/inputarea/inputarea.component';
import { OutputareaComponent } from './components/outputarea/outputarea.component';
import { FooterComponent } from './components/footer/footer.component';

import { DataService } from './services/data.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputareaComponent,
    OutputareaComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
