import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.scss']
})
export class InvoicePageComponent {

  invoiceId:any;
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.invoiceId = params['id'];
    });
  }

  constructor(
    private route : ActivatedRoute
  ) {}
}
