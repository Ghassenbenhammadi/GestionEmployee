import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Departement} from "../departement";
import {DepartementService} from "../departement.service";

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {

  id: number;
  departement: Departement = new Departement();
  constructor(private departementservice: DepartementService,
              private route: ActivatedRoute,
              private router: Router) { }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.departementservice.getDepartementById(this.id).subscribe(data => {
      this.departement = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.departementservice.updateDepartement(this.id, this.departement).subscribe( data =>{
        this.goToDepartementList();
      }
      , error => console.log(error));
  }

  goToDepartementList(){
    this.router.navigate(['/departements']);
  }

}
