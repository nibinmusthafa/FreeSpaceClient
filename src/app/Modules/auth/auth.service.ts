import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';


export interface loginuser{
  id:number,
  name:string,
  email:string,
  designationname:string,
  phone_number:number;
  user_designation:number;
}; 
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  baseUrl  = "http://192.168.1.9:8000/";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(private http:HttpClient) { }

   login(val:any){
      
    return this.http.post(this.baseUrl+'login/',val).pipe(
      map((response:any)=>{
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )     
    }
    logout(){
      localStorage.clear() 
    }

    setCurrentUser(user:User){
      this.currentUserSource.next(user);
    }

    userdata(data:any){
     
      return this.http.post(this.baseUrl+'user/', data)
    }
  }



