import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeeDetails:any;
  Dbdetails:any

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.employeeDetails= this.userservice.getUser();
    console.log(this.employeeDetails)
    if(!this.employeeDetails)
    this.userservice.getUserApi().subscribe(data=>{
      this.Dbdetails=data;
      this.employeeDetails= this.Dbdetails.results.map((original: { "": any; })=>{
        let tempData:any=original
        tempData=tempData["user"]
        console.log(tempData)
        return data={
          gender:tempData.gender,
          name:tempData.name,
          email:tempData.email,
          username:tempData.username,
          password:tempData.password,
          dob:tempData.dob,
          phone:tempData.phone
        }
      })
      this.userservice.setuser(this.employeeDetails);
    })


  }
  updateList(){
    this.employeeDetails=this.userservice.getUser();

  }


}
