import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponent } from 'src/app/global.component';
import { GenericService } from '../generic/generic.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends GenericService {
  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = GlobalComponent.ApiUrl + 'product';
  }
}
