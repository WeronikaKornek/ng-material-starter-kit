import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-checbox',
  styleUrls: ['./categories-checbox.component.scss'],
  templateUrl: './categories-checbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesChecboxComponent {
  readonly list$: Observable<string[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
