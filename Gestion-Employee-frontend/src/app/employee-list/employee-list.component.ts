import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {map} from "rxjs";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Employee[];

  firstName:String;
  constructor(private employeeService : EmployeeService, private router : Router ) { }

  totalLength:any;
  page:number=1;

  ngOnInit(): void {
  this.getEmployees();
  this.totalLength = length;
  }
  private getEmployees(){
    this.employeeService.getEmployeelist().subscribe((data : Employee[])=>{
      this.employees =data;
      console.log(JSON.stringify(data));
    });


  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number){
    Swal.fire({
      title: 'Are you sure to delete this employee?',
      text: "Press yes to delete it!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.employeeService.deleteEmployee(id).subscribe( data => {
          console.log(data);
          this.getEmployees();
        })
        Swal.fire(
          'Deleted!',
          'The employee has been deleted.',
          'success'
        )
      }
    })


  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  Search(value){
    let aux : any = [];
    for (let e of this.employees){
      if(e.firstName.indexOf(value)>-1){
        aux.push(e);
      }
    }
    if(value==''){
      this.getEmployees();
    }
    this.employees=aux;
  }

}
