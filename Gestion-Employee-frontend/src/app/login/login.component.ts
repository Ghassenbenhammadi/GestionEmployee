import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  confirm(){
    if(this.user.username=="admin" && this.user.password=="admin"){
      console.log(this.user.username);
      this.router.navigate(['/home/employees']);
    }else{
      console.log("error");
    }
  }

  OnSubmit(){
    this.confirm();
  }

}
