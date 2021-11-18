import { AfterViewInit, Component, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DesignerService } from '../designer.service';
import { LeadremarksItem } from './updateleads-datasource';
import { icustomer } from '../designer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateleads',
  templateUrl: './updateleads.component.html',
  styleUrls: ['./updateleads.component.css']
})
export class UpdateleadsComponent implements AfterViewInit {

  customer:icustomer[]=[];
  displayedColumns:string[] = ['id', 'customername','leadname','description','statusvalue','updated_on','action'];
  dataSource=this.customer;
  num:number=0;
  updatedresponse:any;
  leads:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LeadremarksItem>;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  


  constructor(private designerservice:DesignerService,private router: Router) {}

  btnClick(id:number){
   var data={
     status_id:2
   }
    this.designerservice.updatestatus(id,data).subscribe(res=>{
      this.leads = res;
      // console.log(res);
    });
    this.router.navigateByUrl('designer/leadremarks/'+id);
   
  };

  loadRemarks(id:any){
    this.router.navigateByUrl('designer/leadremarks/'+id);
  }
    
  getleadList(){
      this.designerservice.getleadcustomer().subscribe(response => {
       this.customer = response;
      // console.log(this.customer)
      });
    }
  updateStatus(id:number,value:any){
    this.designerservice.updatestatus(id,value).subscribe(res => {
      this.updatedresponse=res;
    })
  }
    // this.dataSource = new LeadremarksDataSource();
  
  ngOnInit(){
   
   this.getleadList();
   const user:any= localStorage.getItem('item');
    
  //  console.log(JSON.parse(user)?.user_id);
  }
  ngAfterViewInit(): void {

    this.getleadList();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;

    
  }
}
