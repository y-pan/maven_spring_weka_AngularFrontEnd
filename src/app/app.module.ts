import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputareaComponent } from './components/inputarea/inputarea.component';
import { FooterComponent } from './components/footer/footer.component';

import { DataService } from './services/data.service';
import { EntryareaComponent } from './components/entryarea/entryarea.component'
import { ConfigService } from './services/config.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputareaComponent,
    FooterComponent,
    EntryareaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService, ConfigService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
