import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {DepartementListComponent} from "./departement-list/departement-list.component";
import {CreateDepartementComponent} from "./create-departement/create-departement.component";
import {UpdateDepartementComponent} from "./update-departement/update-departement.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'login' , component: LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home',component:HomeComponent,
  children : [
  {path:'employees', component:EmployeeListComponent},
  {path:'create-employee', component:CreateEmployeeComponent},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'employee-details/:id', component:EmployeeDetailsComponent},
  {path:'departements', component:DepartementListComponent},
  {path:'create-departement', component:CreateDepartementComponent},
  {path:'update-departement/:id', component:UpdateDepartementComponent},
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
