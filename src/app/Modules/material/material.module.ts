import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatFormFieldModule,

  ],
  exports:[
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatFormField,
    MatExpansionModule,
  ],
})
export class MaterialModule { }
