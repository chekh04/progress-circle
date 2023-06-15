import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressCircleComponent} from "./progress-circle.component";



@NgModule({
  declarations: [ProgressCircleComponent],
  exports: [
    ProgressCircleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProgressCircleModule { }
