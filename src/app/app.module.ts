import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProgressCircleModule} from "./progress-circle/progress-circle.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressCircleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
