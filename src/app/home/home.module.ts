import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:"",
    component:HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
