import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {CategoriesComponentModule} from "./components/categories/categories.component-module";
import {CryptoComponentModule} from "./components/crypto/crypto.component-module";
import {ProductDetailComponentModule} from "./components/product-detail/product-detail.component-module";
import {CatComponentModule} from "./components/cat/cat.component-module";
import {AgeComponentModule} from "./components/age/age.component-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductListComponentModule,
    CategoriesComponentModule,
    CryptoComponentModule,
    ProductDetailComponentModule,
    CatComponentModule,
    AgeComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
