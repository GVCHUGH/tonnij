import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/service/common.service';
import { AddTaxClassComponent } from 'src/app/shared/component/add-tax-class/add-tax-class.component';
import { ToggleButtonComponent } from 'src/app/shared/component/toggle-button/toggle-button.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(
    public commomService : CommonService,
    private router : Router,
    private dialog : MatDialog
  ) {
    this.columnDefs = [
      {field: 'SrNo'},
      {field: 'TaxClass', filter: true, editable: true},
      {field: 'Default', filter: true, cellRenderer:  ToggleButtonComponent, editable: true},
    ];

    this.rowData = [
      { SrNo: 1, TaxClass: 'GST @ 5', Default: true},
      { SrNo: 2, TaxClass: 'GST @ 10', Default: false},
      { SrNo: 3, TaxClass: 'GST @ 15', Default: false},
    ];
  }


  toUpdateProfile(){
    this.commomService.profileUpdated = true;
    this.router.navigate(['/dashboard'])
  }

  toAddTax(){
    this.dialog.open(AddTaxClassComponent)
  }

  public rowData :any = [];
  public columnDefs :any= [];

  pagination = true;
  paginationPageSize = 20;
  paginationPageSizeSelector = [20, 50, 100, 200, 500, 1000];
  

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
