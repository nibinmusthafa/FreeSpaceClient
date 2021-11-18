
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { leadremarks } from './models/leadremarks';
// import { leadremarks } from '../interface/leadinterface';

export interface icustomer{
  customer_id:number,
  phonenumber:number,
  customername:string,
  designer_id:number,
  created_by:number,
  status_id:number,
  leadname:string,
  description:string,
  renovation:boolean,
  leadsource_id:number,
  supervisor_id:number,
  updated_on:Date,
  statusvalue:string;
  
  // leadsource_id:number;

}


@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  baseUrl  = "http://192.168.1.9:8000/";



  constructor(private http:HttpClient) { }

  getleadcustomer():Observable<icustomer[]>{
    return this.http.get<icustomer[]>(this.baseUrl+'listlead/');
  }
  updatestatus(id:number, value:any){
    return this.http.patch(this.baseUrl+'updatestatusinlead/'+id+'/', value);
  }

  getLead(id:any):Observable<icustomer>{
    return this.http.get<icustomer>(this.baseUrl+'getlead/'+id+'/');
  }
  
  getleadremarks( lead_id:any):Observable<leadremarks[]>{
    return this.http.get<leadremarks[]>(this.baseUrl+'getleadremarks/'+lead_id+'/');
  }

  addRemarks(data:any){
    return this.http.post(this.baseUrl+'addleadremarks/',data);
  }

}
