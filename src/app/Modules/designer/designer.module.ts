import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignernavbarComponent } from './designernavbar/designernavbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LeadremarksComponent } from './leadremarks/leadremarks.component';
import { UpdateleadsComponent } from './updateleads/updateleads.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [

  { path:'', component: DesignernavbarComponent ,
   children:[
      { path:"updateleads", component: UpdateleadsComponent },
      { path:"leadremarks/:id", component: LeadremarksComponent },
  ]}
  ];

@NgModule({

  declarations: [
    DesignernavbarComponent, 
    LeadremarksComponent, 
    UpdateleadsComponent,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class DesignerModule { }
