import { Component } from '@angular/core';
import { ToggleButtonComponent } from 'src/app/shared/component/toggle-button/toggle-button.component';

@Component({
  selector: 'app-all-trailers',
  templateUrl: './all-trailers.component.html',
  styleUrls: ['./all-trailers.component.scss']
})
export class AllTrailersComponent {

  public rowData :any = [];
  public columnDefs :any= [];

  pagination = true;
  paginationPageSize = 20;
  paginationPageSizeSelector = [20, 50, 100, 200, 500, 1000];
  

  constructor() {
    this.columnDefs = [
      {field: 'SrNo'},
      {field: 'UnitNo', filter: true, editable: true},
      {field: 'Make', filter: true, editable: true},
      {field: 'Model', filter: true, editable: true},
      {field: 'LicensePlate', filter: true, editable: true},
      {field: 'LNSExpiryDate', filter: true, editable: true},
      {field: 'MVIExpiryDate', filter: true, editable: true},
      {field: 'Status', cellRenderer: ToggleButtonComponent, filter: true,}
    ];

    this.rowData = [
      { SrNo: 1, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 2, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 3, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 4, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 5, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 6, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 7, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 8, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
      { SrNo: 9, UnitNo: 100, Make: 'Toyota', Model: 2010, LicensePlate: 'DL2342242345343', LNSExpiryDate: 'Jul 10, 2024', MVIExpiryDate: 'Jul 10, 2024', Status: true},
    ];
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

}
