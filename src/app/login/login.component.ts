import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    //console.log(this.userService.authHandler("smruthul"))
  }
  loginDetails=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  login(){
   
    
    if(this.loginDetails.valid){
      let {username,password}=this.loginDetails.value
   let authData:any= this.userService.authHandler(username)
   if(authData){
    password===authData["password"]?this.router.navigate(['/home']):this.router.navigate(['/','home'])
   }
    }
    
  }

  
}

