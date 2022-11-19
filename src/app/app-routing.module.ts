import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoComponent }, { path: 'public-holidays', component: HolidaysComponent }]), CategoriesComponentModule, CategoriesServiceModule, ProductListComponentModule, ProductsServiceModule, CryptoComponentModule, CryptoServiceModule, HolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
