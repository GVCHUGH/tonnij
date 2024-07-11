import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewLicenseComponent } from '../preview-license/preview-license.component';

@Component({
  selector: 'app-preview-button',
  templateUrl: './preview-button.component.html',
  styleUrls: ['./preview-button.component.scss']
})
export class PreviewButtonComponent {

  constructor(
    private dialog : MatDialog
  ){}

  public value! : string;

  agInit(params: any) {this.value = params.value};

  refresh(params:any){return true}

  toPreview(value:any){
    this.dialog.open(PreviewLicenseComponent, {
      data :{
        src: value
      }
    })
  }
}
