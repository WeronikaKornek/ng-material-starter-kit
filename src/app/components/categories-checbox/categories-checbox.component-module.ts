import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoriesChecboxComponent } from './categories-checbox.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoriesChecboxComponent],
  providers: [],
  exports: [CategoriesChecboxComponent]
})
export class CategoriesChecboxComponentModule {
}
