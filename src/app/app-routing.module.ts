import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegistrationComponent } from './modules/auth/registration/registration.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { AllDriverComponent } from './modules/admin/driver/all-driver/all-driver.component';
import { AddDriverComponent } from './modules/admin/driver/add-driver/add-driver.component';
import { AllCustomerComponent } from './modules/admin/customer/all-customer/all-customer.component';
import { AddCustomerComponent } from './modules/admin/customer/add-customer/add-customer.component';
import { AllTruckComponent } from './modules/admin/truck/all-truck/all-truck.component';
import { AddTruckComponent } from './modules/admin/truck/add-truck/add-truck.component';
import { AllVendorComponent } from './modules/admin/vendor/all-vendor/all-vendor.component';
import { AddVendorComponent } from './modules/admin/vendor/add-vendor/add-vendor.component';
import { AllTrailersComponent } from './modules/admin/trailers/all-trailers/all-trailers.component';
import { AddTrailerComponent } from './modules/admin/trailers/add-trailer/add-trailer.component';
import { ProfileComponent } from './modules/admin/profile/profile.component';
import { CreateLoadComponent } from './modules/admin/create-load/create-load.component';
import { DispatchBoardComponent } from './modules/admin/dispatch-board/dispatch-board.component';
import { CompleteBoardComponent } from './modules/admin/complete-board/complete-board.component';
import { InvoiceComponent } from './modules/admin/invoice/invoice.component';
import { InvoicePageComponent } from './modules/admin/invoice/invoice-page/invoice-page.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'all-driver', component: AllDriverComponent},
  {path:'add-driver', component: AddDriverComponent},
  {path:'all-customer', component: AllCustomerComponent},
  {path:'add-customer', component: AddCustomerComponent},
  {path:'all-truck', component: AllTruckComponent},
  {path:'add-truck', component: AddTruckComponent},
  {path:'all-vendor', component: AllVendorComponent},
  {path:'add-vendor', component: AddVendorComponent},
  {path:'all-trailers', component: AllTrailersComponent},
  {path:'add-trailer', component: AddTrailerComponent},
  {path:'my-profile', component: ProfileComponent},
  {path:'create-load', component: CreateLoadComponent},
  {path:'dispatch-board', component: DispatchBoardComponent},
  {path:'complete-board', component: CompleteBoardComponent},
  {path:'invoice', component: InvoiceComponent},
  {path:'invoice-page/:id', component: InvoicePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
