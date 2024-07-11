import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  tableHeading:string = 'Driver';

  getTableData(value:any){
    this.tableHeading = value;
  }
}
