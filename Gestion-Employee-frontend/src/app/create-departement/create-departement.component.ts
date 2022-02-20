import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Departement} from "../departement";
import {DepartementService} from "../departement.service";

@Component({
  selector: 'app-create-departement',
  templateUrl: './create-departement.component.html',
  styleUrls: ['./create-departement.component.css']
})
export class CreateDepartementComponent implements OnInit {

 departement: Departement= new  Departement();

  constructor( private departementservice: DepartementService ,private router: Router) { }

  ngOnInit(): void {
  }
  saveDep(){
    this.departementservice.createDepartement(this.departement).subscribe(data =>{
        console.log(data);
        this.goToDepList();
      },
      error => console.log(error));
  }
  goToDepList(){
    this.router.navigate(['/departements']);
  }
  OnSubmit(){
    console.log(this.departement);
    this.saveDep();

  }

}
