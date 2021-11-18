import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';



export interface user{
  user_id:number,
  user_name:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

 user:any;
 loggedUser:any;
  
  constructor(private fb: FormBuilder,private router: Router,private http:AuthService ) {}

    onSubmit(){ 

    this.user=this.loginForm.getRawValue();
   
     if(this.user.email === "abna@gmail.com" && this.user.password === "1234"){
    
      const item:user = { user_id:1,user_name:"Abna"};

      localStorage.setItem('item', JSON.stringify(item));
      
      this.router.navigate(['admindashboard']);
  
    };
    if(this.user.email === "nibin@gmail.com" && this.user.password === "1234"){
      
      const item:user = { user_id:2,user_name:"nibin"};

      localStorage.setItem('item', JSON.stringify(item));
      
      this.router.navigate(['admin']);
      
      this.router.navigate(['designer']);
  
    };
  
  }

  

    login(){

      console.log(this.loginForm.getRawValue());
      this.http.login(this.loginForm.getRawValue()).subscribe(res =>{
      
        this.loggedUser=res;
        console.log(this.loggedUser);
        this.setToken(JSON.stringify(res));
        this.getuser();
      })

      

    }

    setToken(token:any){
      localStorage.setItem('user',token);
    }

    getcurrentUser(){
      const user:any= localStorage.getItem('user');
      console.log(JSON.parse(user)?.jwt);
      return JSON.parse(user)?.jwt;
    }


    ngOnInit(): void {
      // this.getuser();
     }
    
     getuser(){
      var token=this.getcurrentUser()
       var data={
         jwt : token
        }
       this.http.userdata(data).subscribe(res=>{
        localStorage.setItem('currentUser',JSON.stringify(res))
        console.log(res)
       })
     }
    logout(){
      this.http.logout();
    }
  
}

