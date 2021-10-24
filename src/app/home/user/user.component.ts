import { UserService } from './../../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output() update = new EventEmitter();

  constructor(private fb:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  }
  employeedetails=this.fb.group({
    name:this.fb.group({
      first:['',[Validators.required]],
      last:['',[Validators.required]],
      title:['',[Validators.required]]
    }),
    gender:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    phone:['',[Validators.required]],
    username:['',[Validators.required]],
    dob:['',[Validators.required]]
  })
  onSubmit(){
    if(this.employeedetails.valid){
      let userdat:any=this.userService.getUser();
      userdat.push(this.employeedetails.value)
      this.userService.setuser(userdat);
      this.update.emit("update");
    }    
  }
}
