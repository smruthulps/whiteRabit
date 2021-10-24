import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  /*  this.userService.getUserApi().subscribe(data=>{
    console.log(data)
   }) */
    
  }
  constructor(private userService:UserService){

  }
  title = 'WhiteRabbit';
}
