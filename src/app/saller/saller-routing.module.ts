import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SallerComponent } from './saller.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [{
  path: '', component: SallerComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    {path:'product/:id',component:ProductDetailComponent},
    {path:'product',component:ProductDetailComponent}
  ]
}, { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallerRoutingModule { }
