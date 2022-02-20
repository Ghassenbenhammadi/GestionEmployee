import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {NgxPaginationModule} from "ngx-pagination";
import { CreateDepartementComponent } from './create-departement/create-departement.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { DeleteDepartementComponent } from './delete-departement/delete-departement.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateDepartementComponent,
    DepartementListComponent,
    UpdateDepartementComponent,
    DeleteDepartementComponent,
    LoginComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
