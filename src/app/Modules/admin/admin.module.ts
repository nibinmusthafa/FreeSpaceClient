import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateleadComponent } from './createlead/createlead.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';



const routes: Routes = [

  { path:'', component: AdmindashboardComponent ,
   children:[
      { path:'createlead', component: CreateleadComponent },
      { path:'addcustomer', component: AddcustomerComponent },
  ]}
  ];


@NgModule({
  
  declarations: [

  
  AdmindashboardComponent,
      CreateleadComponent,
      AddcustomerComponent,
   ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MaterialModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
   
   

  ],

  exports: [
    RouterModule,
    MatGridListModule,
    
 
    
    
  ],
})


export class AdminModule { }
