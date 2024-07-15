import { Component } from '@angular/core';

@Component({
  selector: 'app-dispatch-board',
  templateUrl: './dispatch-board.component.html',
  styleUrls: ['./dispatch-board.component.scss']
})
export class DispatchBoardComponent {

  public rowData :any = [];
  public columnDefs :any= [];

  pagination = true;
  paginationPageSize = 20;
  paginationPageSizeSelector = [20, 50, 100, 200, 500, 1000];
  

  constructor() {
    this.columnDefs = [
      {field: 'OrderNo', filter: true, editable: true},
      {field: 'CompanyName', filter: true, editable: true},
      {field: 'Source', filter: true, editable: true},
      {field: 'Destination', filter: true, editable: true},
      {field: 'Qty', filter: true, editable: true},
      {field: 'Equipment', filter: true, editable: true},
      {field: 'Status', filter: true, cellRenderer : (p:any) => {
        return p.data.Status ? 'Availbale' : 'Not Available'
      }},
      {field: 'Rate', filter: true, editable: true},
      {field: 'Action'},
    ];

    this.rowData = [
      {OrderNo: 'NTPL-00677', CompanyName: 'qwerty', Source: 'qwerty qwerty qwerty', Destination: 'qwerty qwerty qwerty', Qty: 1, Equipment: 'Truck and 4 Axle Wagon', Status: true, Rate: 'C 0.00'},
      {OrderNo: 'NTPL-00677', CompanyName: 'qwerty', Source: 'qwerty qwerty qwerty', Destination: 'qwerty qwerty qwerty', Qty: 1, Equipment: 'Truck and 4 Axle Wagon', Status: false, Rate: 'C 0.00'},
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
