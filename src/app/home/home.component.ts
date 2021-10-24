import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeeDetails:any;
  Dbdetails:any
  search:any;
  constructor(private userservice:UserService) { }
  searchName(){
    this.employeeDetails = this.userservice.getUser();
    if(this.search){
      this.employeeDetails = this.employeeDetails.filter((data:any)=>{
        let smallcase=data.name.first
        smallcase=smallcase.toLowerCase()
        this.search=this.search.toLowerCase()
        return smallcase.includes(this.search)
      })
      console.log(this.employeeDetails)
    }   
  }

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
