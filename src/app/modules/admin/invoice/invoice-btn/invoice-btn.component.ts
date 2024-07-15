import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-btn',
  templateUrl: './invoice-btn.component.html',
  styleUrls: ['./invoice-btn.component.scss']
})
export class InvoiceBtnComponent {

  constructor(
    private router: Router,
  ){}
  label:any= '123466';

  public value! : string;

  agInit(params: any) {
    this.value = params.data
    this.label = params.data.InvoiceNo;
  };

  refresh(params:any){return true}

  toPreview(value:any){
      this.router.navigate(['/invoice-page' , this.label])
  }
}
