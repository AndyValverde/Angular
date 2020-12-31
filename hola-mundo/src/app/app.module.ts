import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderCom} from './components/header/header.component';
import { bodyComp } from './components/body/body.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderCom,
    bodyComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
