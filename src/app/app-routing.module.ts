import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {HolidaysComponent} from './components/holidays/holidays.component';
import {CategoriesChecboxComponent} from './components/categories-checbox/categories-checbox.component';
import {CategoriesMenuComponent} from './components/categories-menu/categories-menu.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {CategoriesComponentModule} from './components/categories/categories.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {CryptoComponentModule} from './components/crypto/crypto.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';
import {HolidaysComponentModule} from './components/holidays/holidays.component-module';
import {HolidaysServiceModule} from './services/holidays.service-module';
import {CategoriesChecboxComponentModule} from './components/categories-checbox/categories-checbox.component-module';
import {CategoriesMenuComponentModule} from './components/categories-menu/categories-menu.component-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';
import {CreateProductServiceModule} from './services/create-product.service-module';
import {EmployeeComponentModule} from './components/employee/employee.component-module';
import {EmployeeServiceModule} from './services/employee.service-module';
import {LoginComponentModule} from './components/login/login.component-module';
import {LoginServiceModule} from './services/login.service-module';
import {RegisterComponentModule} from './components/register/register.component-module';
import {RegisterServiceModule} from './services/register.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products-search', component: ProductListComponent}, {
    path: 'categories',
    component: CategoriesComponent
  }, {path: 'crypto', component: CryptoComponent}, {
    path: 'public-holidays',
    component: HolidaysComponent
  }, {path: 'checkbox-categories', component: CategoriesChecboxComponent}, {
    path: 'categories-menu',
    component: CategoriesMenuComponent
  }, {path: 'create-product', component: ProductFormComponent}, {
    path: 'create-employee',
    component: EmployeeComponent
  }, {path: 'login', component: LoginComponent}, {
    path: 'register',
    component: RegisterComponent
  }]), CategoriesComponentModule, CategoriesServiceModule, ProductListComponentModule, ProductsServiceModule, CryptoComponentModule, CryptoServiceModule, HolidaysComponentModule, HolidaysServiceModule, CategoriesChecboxComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, CreateProductServiceModule, EmployeeComponentModule, EmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterComponentModule, RegisterServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
