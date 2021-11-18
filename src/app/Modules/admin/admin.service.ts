import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface idesignation{
  id:number;
  designation_name:string
}
export interface iuser{
  id:number;
  name:string;
  user_designation:number;
  designationname:string;
}
export interface icustomer{
  id:number;
  customer_firstname:string;
  customer_lastname:string;
  
}
export interface ileadsource{
  id:number;
  sourcevalue:string;
  
  
}
export interface ilead{
  id:number;
  customer_firstname:string;
  customer_lastname:string;
  
}
export interface iuser{
  id:number;
  name:string
}
export interface icategory{
  id:number;
  category_name:string;
}
export interface isubcategory{
  id:number;
  name:string;
}
export interface idescription{
  name:string;
}
export interface icustomer{
  id:number;
  customer_firstname:string;
  customer_lastname:string;
  customer_phonenumber:number;

}
export interface iunit{
  id:number;
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl  = "http://192.168.1.9:8000/";
  
  constructor(private http:HttpClient) { }
  getDesignation():Observable<idesignation[]>{
    return this.http.get<idesignation[]>(this.baseUrl+'listdesignations/');
  }
  getUser():Observable<iuser[]>{
    return this.http.get<iuser[]>(this.baseUrl+'listuser/');
  }

  listDesigner():Observable<iuser[]>{
    return this.http.get<iuser[]>(this.baseUrl+'listdesigner/');
  }


  getCustomer():Observable<icustomer[]>{
    return this.http.get<icustomer[]>(this.baseUrl+'listcustomers/');
  }

  getCustomerbyId(pk:any):Observable<icustomer>{
    return this.http.get<icustomer>(this.baseUrl+ 'getcustomer/'+pk+'/');
  }

  getLeadSource():Observable<ileadsource[]>{
    return this.http.get<ileadsource[]>(this.baseUrl+'listleadsource/');
  }
  getLead():Observable<ilead[]>{
    return this.http.get<ilead[]>(this.baseUrl+'listlead/');
  }
  getCategory():Observable<icategory[]>{
    return this.http.get<icategory[]>(this.baseUrl+'listcategory/');
  }
  getSubCategory():Observable<isubcategory[]>{
    return this.http.get<isubcategory[]>(this.baseUrl+'listsubcategory/');
  }
 
  getDescription():Observable<idescription[]>{
    return this.http.get<idescription[]>(this.baseUrl+'listlead/');
  }

  createLead(val:any){
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl+'createlead/', val);
  }
  addCustomer(val:any){
    return this.http.post(this.baseUrl+'addcustomer/',val)
  }
}
