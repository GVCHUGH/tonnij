import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToggleButtonComponent } from './component/toggle-button/toggle-button.component';



@NgModule({
  declarations: [
    ToggleButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
