import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFromComponent } from './components/login-from/login-from.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingUpFromComponent } from './components/sing-up-from/sing-up-from.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'login', component: LoginFromComponent },
  { path: 'singUp', component: SingUpFromComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
