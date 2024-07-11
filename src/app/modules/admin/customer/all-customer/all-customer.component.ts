import { Component } from '@angular/core';
import { ToggleButtonComponent } from 'src/app/shared/component/toggle-button/toggle-button.component';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.scss']
})
export class AllCustomerComponent {

  public rowData :any = [];
  public columnDefs :any= [];

  pagination = true;
  paginationPageSize = 20;
  paginationPageSizeSelector = [20, 50, 100, 200, 500, 1000];
  

  constructor() {
    this.columnDefs = [
      {field: 'SrNo'},
      {field: 'CompanyName', filter: true, editable: true},
      {field: 'ContactPersonName', filter: true, editable: true},
      {field: 'Cellphone', filter: true, editable: true},
      {field: 'Email', filter: true, editable: true},
      {field: 'GST', filter: true, editable: true},
      {field: 'Favourite', filter: true, editable: true, cellRenderer: (params:any) => {
        return params.value ? '<img src="../../../../../assets/icons/heart-solid.svg" width="20">' : '<img src="../../../../../assets/icons/heart-regular.svg" width="20">';
      }},
      {field: 'Status', cellRenderer: ToggleButtonComponent, filter: true,}
    ];

    this.rowData = [
      { SrNo: 1, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 2, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: false, Status: false},
      { SrNo: 3, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: false},
      { SrNo: 4, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 5, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: false, Status: true},
      { SrNo: 6, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: false, Status: true},
      { SrNo: 7, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 8, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 9, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 10, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 11, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 12, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 13, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 14, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 15, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 16, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 17, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 18, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 19, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 20, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
      { SrNo: 21, CompanyName: 'Rajendra Pvt. Ltd.', ContactPersonName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', GST: '789456789456', Favourite: true, Status: true},
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
