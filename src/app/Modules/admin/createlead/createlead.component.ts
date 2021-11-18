import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService, icustomer, icategory, idescription, ileadsource, isubcategory, iuser, iunit } from '../admin.service';
import { Leads } from '../models/leads';


@Component({
  selector: 'app-createlead',
  templateUrl: './createlead.component.html',
  styleUrls: ['./createlead.component.css']
})

export class CreateleadComponent {

  customers:icustomer[]=[];
  leadsources:ileadsource[]=[];
  categories_source:icategory[]=[];
  subcategories:isubcategory[]=[];
  descriptions:idescription[]=[];
  units:iunit[]=[];
  designers:iuser[]=[];
  leads:Leads[]=[];
  displaydata:{}={};
  customer:any;
  num:number=1001;
  leadname:any;
  
  leadForm = this.fb.group({
    designer_id: [null],
    customer_id: [null, Validators.required],
    leadname:[null,],
    description:[null, Validators.required],
    renovation:[null],
    leadsource_id: [null, Validators.required],
    status_value:[null],
    categories: this.fb.array([
      this.fb.group({
        // catId: [],
        category_id: [],
        sub_cat_id: [],
        units: [null],  
      }),
    ]),
  });

  constructor(private fb: FormBuilder,private adminservice:AdminService) {  }
  get categories(){
    return this.leadForm.get('categories') as FormArray;
  }

  addnewCategory():FormGroup{
    //const catId = this.categories.length;
    return this.fb.group({
      
      // catId: [catId+1],
      category_id: [''],
      sub_cat_id: [''],
      units: [''],
      })
    }

    getCustomerByid(id:any){
      // this.adminservice.getCustomerbyId(id).subscribe(res=>{
      //   console.log(res);
      //   this.customer=res;
      // })
     this.customer =  this.customers.find(x =>x.id==id)
      console.log(this.customer?.customer_firstname +" "+ this.customer?.customer_lastname)
    }
    getcategoryByid(id:any){
      let category=this.categories_source.find(x=>x.id ==id)
      
      this.leadname = this.customer?.customer_firstname+"_"+category?.category_name
      console.log(this.leadname)
    }

  createLead(){
    // this.getCustomerByid(this.leadForm.get('customer_id')?.value);
    var val={
      lead_id:{
        created_by:1,
        designer_id:this.leadForm.get('designer_id')?.value,
        customer_id:this.leadForm.get('customer_id')?.value,
        status_id:1,
        leadname:this.leadname,
        description:this.leadForm.get('description')?.value,
        renovation:this.leadForm.get('renovation')?.value,
        leadsource_id:this.leadForm.get('leadsource_id')?.value,
        supervisor_id:null,
      },
      categories:this.leadForm.get('categories')?.value
      
    // console.log(this.leadForm.get('description')?.value);   
    }  
    this.adminservice.createLead(val).subscribe(value =>{
      console.log(value);
      
    })
  }

  onSubmit(): void {
    this.num++;
    
    this.addnewCategory();
    // let cat = this.leadForm.get('categories');
    console.log(this.displaydata);
    console.log(JSON.stringify(this.displaydata));
    this.leads=this.leadForm.getRawValue();
    this.createLead();
    this.leadForm.reset();
    // console.log(this.leadForm.getRawValue());
  }

  ListDesigner(){
    this.adminservice.listDesigner().subscribe(des =>{
     return this.designers=des;
    })
  }
  addCategory() {
    this.categories.push(this.addnewCategory());
  }
  getCustomerlist(){
    this.adminservice.getCustomer().subscribe(res =>{
      this.customers=res;
    })
  }
  getLeadsourcelist(){
    this.adminservice.getLeadSource().subscribe(res =>{
      this.leadsources=res;
    })
  }
  getCategorylist(){
    this.adminservice.getCategory().subscribe(res =>{
      this.categories_source=res;
    })
  }
  getSubCategorylist(){
    this.adminservice.getSubCategory().subscribe(res =>{
      this.subcategories=res;
    })
  }
  getDescriptionlist(){
    this.adminservice.getDescription().subscribe(res =>{
      this.descriptions=res;
    })
  }

  demoFunction(){
    console.log(this.designers);
   let customer =  this.customers.find(x=> x.id==17)
    console.log(customer?.customer_phonenumber);

  }


  ngOnInit(){
    
    this.getCustomerlist();
    this.getLeadsourcelist();
    this.getCategorylist();
    this.getSubCategorylist();
    //this.getDescriptionlist();
    this.ListDesigner();
    
    }
  }
