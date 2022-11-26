import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {AgeModel} from '../../models/age.model';
import {AgeService} from '../../services/age.service';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {
  readonly data$: Observable<AgeModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._ageService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _ageService: AgeService) {
  }
}
