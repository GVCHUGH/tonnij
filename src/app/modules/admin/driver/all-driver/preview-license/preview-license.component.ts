import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-license',
  templateUrl: './preview-license.component.html',
  styleUrls: ['./preview-license.component.scss']
})
export class PreviewLicenseComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

}
