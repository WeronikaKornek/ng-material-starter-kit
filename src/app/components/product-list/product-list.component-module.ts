import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ProductListComponent} from './product-list.component';
import {AsyncPipe, JsonPipe, NgForOf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [MatCardModule, AsyncPipe, JsonPipe, MatListModule, NgForOf, MatTableModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
