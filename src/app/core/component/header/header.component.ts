import { Component } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public commonService : CommonService
  ){}

  menuList = [
    {
      menuItem: 'Dashboard', 
      menuIcon: '../../../../assets/icons/menu-icon/dashboard-icon.svg', 
      routerLink: '/dashboard', 
      hasSubMenu: false
    },
    {
      menuItem: 'Home', 
      menuIcon: '../../../../assets/icons/menu-icon/home-icon.svg',  
      hasSubMenu: true, 
      subMenu: [
        {subMenuItem: 'Drivers', route: '/all-driver'},
        {subMenuItem: 'Trucks', route: '/all-truck'},
        {subMenuItem: 'Trailers', route: '/all-trailers'},
        {subMenuItem: 'Customers', route: '/all-customer'},
        {subMenuItem: 'Vendors', route: '/all-vendor'},
        {subMenuItem: 'My Profile', route: '/my-profile'},
      ]
    },
    {
      menuItem: 'Create Load', 
      menuIcon: '../../../../assets/icons/menu-icon/create-icon.svg', 
      routerLink: '/', 
      hasSubMenu: false
    },
    {
      menuItem: 'Dispatch Board', 
      menuIcon: '../../../../assets/icons/menu-icon/dispatch-icon.svg', 
      routerLink: '/', 
      hasSubMenu: false
    },
    {
      menuItem: 'Complete Load', 
      menuIcon: '../../../../assets/icons/menu-icon/complete-icon.svg', 
      routerLink: '/', 
      hasSubMenu: false
    },
    {
      menuItem: 'Invoice', 
      menuIcon: '../../../../assets/icons/menu-icon/invoice-icon.svg', 
      routerLink: '/', 
      hasSubMenu: false
    },
  ]

}
