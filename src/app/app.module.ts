import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './modules/auth/registration/registration.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { HeaderComponent } from './core/component/header/header.component';
import { AllDriverComponent } from './modules/admin/driver/all-driver/all-driver.component';
import { AddDriverComponent } from './modules/admin/driver/add-driver/add-driver.component';
import { SharedModule } from './shared/shared.module';
import { AddTruckComponent } from './modules/admin/truck/add-truck/add-truck.component';
import { AllTruckComponent } from './modules/admin/truck/all-truck/all-truck.component';
import { AllVendorComponent } from './modules/admin/vendor/all-vendor/all-vendor.component';
import { AddVendorComponent } from './modules/admin/vendor/add-vendor/add-vendor.component';
import { AddCustomerComponent } from './modules/admin/customer/add-customer/add-customer.component';
import { AllCustomerComponent } from './modules/admin/customer/all-customer/all-customer.component';
import { AllTrailersComponent } from './modules/admin/trailers/all-trailers/all-trailers.component';
import { AddTrailerComponent } from './modules/admin/trailers/add-trailer/add-trailer.component';
import { ProfileComponent } from './modules/admin/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    HeaderComponent,
    AllDriverComponent,
    AddDriverComponent,
    AddTruckComponent,
    AllTruckComponent,
    AllVendorComponent,
    AddVendorComponent,
    AddCustomerComponent,
    AllCustomerComponent,
    AllTrailersComponent,
    AddTrailerComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
