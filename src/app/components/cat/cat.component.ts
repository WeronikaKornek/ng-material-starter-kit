import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {CatModel} from '../../models/cat.model';
import {CatService} from '../../services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatComponent {
  readonly list$: Observable<CatModel> = this._catService.getAll();

  constructor(private _catService: CatService) {
  }
}
