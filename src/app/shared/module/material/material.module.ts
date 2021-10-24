import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
const materialModules = [
  MatIconModule,  
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[materialModules]
})
export class MaterialModule { }
