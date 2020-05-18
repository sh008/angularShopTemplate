import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SallerRoutingModule } from './saller-routing.module';
import { SallerComponent } from './saller.component';
import { SideNavComponent } from './_layout/side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [SallerComponent, SideNavComponent, HomeComponent, LoginComponent, ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    SallerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SallerModule { }
