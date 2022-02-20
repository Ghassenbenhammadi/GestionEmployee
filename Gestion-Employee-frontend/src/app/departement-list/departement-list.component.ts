import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {Departement} from "../departement";
import {DepartementService} from "../departement.service";

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  departements!: Departement[];
  name:String;
  constructor(private departementService : DepartementService, private router : Router ) { }

  totalLength:any;
  page:number=1;

  ngOnInit(): void {
    this.getDepartements();
    this.totalLength = length;
  }
  private getDepartements(){
    this.departementService.getDeplist().subscribe(data=>{
      this.departements=data;
    })

  }
  updateDepartement(id: number){
    this.router.navigate(['update-departement', id]);
  }
  deleteDepartement(id: number){
    Swal.fire({
      title: 'Are you sure to delete this departement?',
      text: "Press yes to delete it!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.departementService.deleteDepartement(id).subscribe( data => {
          console.log(data);
          this.getDepartements();
        })
        Swal.fire(
          'Deleted!',
          'The departement has been deleted.',
          'success'
        )
      }
    })


  }

  Search(value){
    let aux : any = [];
    for (let e of this.departements){
      if(e.departement_Name.indexOf(value)>-1){
        aux.push(e);
      }
    }
    this.departements=aux;

  }

}
