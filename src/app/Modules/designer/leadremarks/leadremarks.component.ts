import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators,FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { DesignerService } from '../designer.service';


export interface lead{
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
}

export interface item{
  user_id:number,
  user_name:string
}




@Component({
  selector: 'app-leadremarks',
  templateUrl: './leadremarks.component.html',
  styleUrls: ['./leadremarks.component.css']

})
export class LeadremarksComponent implements OnInit {
  current_user:any;
  getcurrentUser(){
    const user:any= localStorage.getItem('item');
    console.log(JSON.parse(user)?.user_id);
    return JSON.parse(user)?.user_id;
  }
  
  
  
  displayedColumns:string[] = ['id','customername','phonenumber','updated_on','renovation'];

  leadForm = this.fb.group({
    remark_data:[null,Validators.required],
    lead_id:this.route.snapshot.paramMap.get('id'),
    user_id:this.getcurrentUser()
  });

  lead:any;
  leadarray:any[]=[];
  designerservice: any;

  constructor(private fb: FormBuilder,private http :DesignerService, private route: ActivatedRoute) { 
    

  }

  ngOnInit(): void {
    this.loadLead();
   
    // console.log(this.lead);
    this.getremarks();
  
  }
 
  loadLead(){

    this.http.getLead(this.route.snapshot.paramMap.get('id')).subscribe(lead =>{
      this.lead=lead;
      console.log(this.lead)
      
    })   
  }
    
  
  getremarks(){
      this.http.getleadremarks(this.route.snapshot.paramMap.get('id')).subscribe(lead =>{
        this.leadarray=lead;
              
      }) 

   
    }
     
    addLeadRemarks(){
      this.http.addRemarks(this.leadForm.getRawValue()).subscribe(res=>{
      console.log(res);
      this.getremarks();
      });
                 
      }

    clearForm(){
      this.leadForm.reset();
    }
 


  
  

}
