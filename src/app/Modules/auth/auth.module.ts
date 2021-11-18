import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  { path:'', component:LoginComponent }

];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    RouterModule,
    HttpClientModule,
  
  ],
})

export class AuthModule { }
