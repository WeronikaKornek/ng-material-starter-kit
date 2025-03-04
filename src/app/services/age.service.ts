import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AgeModel} from '../models/age.model';
import {ProductModel} from "../models/product.model";

@Injectable()
export class AgeService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name: string): Observable<AgeModel> {
    return this._httpClient.get<AgeModel>('https://api.agify.io/?name=' + name);
  }
}
