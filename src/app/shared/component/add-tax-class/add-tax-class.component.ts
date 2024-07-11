import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-tax-class',
  templateUrl: './add-tax-class.component.html',
  styleUrls: ['./add-tax-class.component.scss']
})
export class AddTaxClassComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef : MatDialogRef<AddTaxClassComponent>
  ){}

  toClose(){
    this.dialogRef.close();
  }
}
