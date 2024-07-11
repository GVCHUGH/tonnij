import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-license',
  templateUrl: './preview-license.component.html',
  styleUrls: ['./preview-license.component.scss']
})
export class PreviewLicenseComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef : MatDialogRef<PreviewLicenseComponent>
  ){}

  toClose(){
    this.dialogRef.close();
  }

  

}
