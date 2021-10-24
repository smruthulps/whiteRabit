import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import logindetails from './_file/user.json'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUser(){
    let stringdata:any=localStorage.getItem("users")
    return JSON.parse(stringdata) 
  }
  setuser(data:any){
    return localStorage.setItem('users',JSON.stringify(data))
  }
  authHandler(username:string){
    return logindetails.find(data=>data.username==username)
  }
  getUserApi(){
    return this._http.get('https://randomuser.me/api/0.8/?results=20')
  }
}
