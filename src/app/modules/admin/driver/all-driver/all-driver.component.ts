import { Component } from '@angular/core';
import { ToggleButtonComponent } from 'src/app/shared/component/toggle-button/toggle-button.component';
import { PreviewButtonComponent } from './preview-button/preview-button.component';

@Component({
  selector: 'app-all-driver',
  templateUrl: './all-driver.component.html',
  styleUrls: ['./all-driver.component.scss']
})
export class AllDriverComponent {

  public rowData :any = [];
  public columnDefs :any= [];

  pagination = true;
  paginationPageSize = 20;
  paginationPageSizeSelector = [20, 50, 100, 200, 500, 1000];
  

  constructor() {
    this.columnDefs = [
      {field: 'SrNo'},
      {field: 'DriverName', filter: true, editable: true},
      {field: 'Cellphone', filter: true, editable: true},
      {field: 'Email', filter: true, editable: true},
      {field: 'LicenseNo', filter: true, editable: true},
      {field: 'LicensePreview', cellRenderer: PreviewButtonComponent},
      {field: 'HiringDate', filter: true, editable: true},
      {field: 'LicenseExpiry', filter: true, editable: true},
      {field: 'Status', cellRenderer:  ToggleButtonComponent, filter: true,}
    ];

    this.rowData = [
      { SrNo: 1, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', LicensePreview: '../../../../../assets/images/document-image.png', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 2, DriverName: 'Jogindra Malhotra', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', LicensePreview: '../../../../../assets/images/document-image.png', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: false},
      { SrNo: 3, DriverName: 'Gaurav Chugh', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 4, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 5, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 6, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 7, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 8, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 9, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 10, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 11, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 12, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
      { SrNo: 13, DriverName: 'Rajendra Rohilla', Cellphone: '7897894567', Email: 'Shines@gmail.com', LicenseNo: 'DL789456789456', HiringDate: 'Jul 10, 2024', LicenseExpiry: 'Jul 12, 2024', Status: true},
    ];
  }

  onFirstDataRendered(params:any) {
    params.api.sizeColumnsToFit();
  }

  onRowClicked(event:any) {}
}
