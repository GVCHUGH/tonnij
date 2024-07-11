import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-status-confirmation',
  templateUrl: './status-confirmation.component.html',
  styleUrls: ['./status-confirmation.component.scss']
})
export class StatusConfirmationComponent {

  constructor(
    private dialogRef : MatDialogRef<StatusConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  toDismiss(){
    this.dialogRef.close();
  }

  toConfirm(){
    this.dialogRef.close(true);
  }
}
