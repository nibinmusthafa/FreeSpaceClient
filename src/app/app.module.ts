import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Modules/auth/auth.module';





const routes: Routes = [
 
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    NgMultiSelectDropDownModule.forRoot(),
    
  
  ],


  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [    
    AppComponent 
  ]

})

export class AppModule { }
