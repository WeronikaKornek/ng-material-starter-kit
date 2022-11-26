import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BoredComponent} from './bored.component';
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    MatCardModule,
    AsyncPipe,
    NgIf
  ],
  declarations: [BoredComponent],
  providers: [],
  exports: [BoredComponent]
})
export class BoredComponentModule {
}
