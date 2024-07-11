import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusConfirmationComponent } from '../status-confirmation/status-confirmation.component';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent {

  constructor(
    private dialog : MatDialog
  ){}
  public value! : any;

  agInit(params: any) {
    this.value = params.data
  };

  refresh(params:any){return true}

  toChange(){
    this.dialog.open(StatusConfirmationComponent, {
      data: {
        status : this.value.Status
      }
    })
    .afterClosed().subscribe((res:any) => {
      if(res){
        this.value.Status = !this.value.Status;
      }
    })
  }

}
