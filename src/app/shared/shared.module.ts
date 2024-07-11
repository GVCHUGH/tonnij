import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ToggleButtonComponent } from './component/toggle-button/toggle-button.component';
import { StatusConfirmationComponent } from './component/status-confirmation/status-confirmation.component';
import { AddTaxClassComponent } from './component/add-tax-class/add-tax-class.component';



@NgModule({
  declarations: [
    ToggleButtonComponent,
    StatusConfirmationComponent,
    AddTaxClassComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
