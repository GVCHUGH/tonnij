import { Component } from '@angular/core';
import { InvoiceBtnComponent } from './invoice-btn/invoice-btn.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  public rowData :any = [];
  public columnDefs :any= [];

  pagination = true;
  paginationPageSize = 20;
  paginationPageSizeSelector = [20, 50, 100, 200, 500, 1000];
  

  constructor() {
    this.columnDefs = [
      {field: 'InvoiceNo', cellRenderer: InvoiceBtnComponent},
      {field: 'OrderNo', filter: true, editable: true},
      {field: 'CompanyName', filter: true, editable: true},
      {field: 'Source', filter: true, editable: true},
      {field: 'Destination', filter: true, editable: true},
      {field: 'GrandTotal', filter: true, editable: true},
      {field: 'Balance', filter: true, editable: true},
      {field: 'Action'},
    ];

    this.rowData = [
      {InvoiceNo: 'NTPL-00677', OrderNo: 'NTPL-00677', CompanyName: 'qwerty', Source: 'qwerty qwerty qwerty', Destination: 'qwerty qwerty qwerty', GrandTotal: '1050', Balance: '1050'},
      {InvoiceNo: 'NTPL-00678', OrderNo: 'NTPL-00678', CompanyName: 'qwerty', Source: 'qwerty qwerty qwerty', Destination: 'qwerty qwerty qwerty', GrandTotal: '1050', Balance: '1050'},
    ]
  }

  onFirstDataRendered(params:any) {
    params.api.sizeColumnsToFit();
  }

  onRowClicked(event:any) {}

  onRowValueChanged(event: any) {
    // console.log('Row value changed:', event);
  }

  onCellValueChanged(event: any) {
    // console.log('Cell value changed:', event);
  }

  tableFilter:string = 'All';

  getTableData(value:any){
    this.tableFilter = value;
  }
}
