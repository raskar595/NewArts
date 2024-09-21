import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  email:any;
  password:any;

  validEmail="admin@admin.com";
  validPass="admin@123";


  login(){

    if(this.email==this.validEmail && this.password==this.validPass){
      alert("User login successfully..");
      this.router.navigate(["/toggle"]);
    }
    else{
      alert("Please enter valid Email & Password..!");
    }
    

  }

}
