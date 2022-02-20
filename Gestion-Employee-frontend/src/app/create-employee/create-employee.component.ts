import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {DepartementService} from "../departement.service";
import {Departement} from "../departement";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee= new Employee();
  departements!: Departement[];
  constructor(private departementService:DepartementService ,private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
    //this.getDepartements();
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();




    },
      error => console.log(error));




    
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  OnSubmit(){
    console.log(this.employee);
    this.saveEmployee();

  }

  // private getDepartements() {
  //   this.departementService.getDeplist().subscribe(data => {
  //     this.departements = data;
  //   });
  // }
}
