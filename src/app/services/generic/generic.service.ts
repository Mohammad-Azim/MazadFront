import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global.component';
import { BaseResponse } from 'src/app/models/BaseResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class GenericService {
  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = GlobalComponent.ApiUrl;
  }

  getAll(): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(this.apiUrl);
  }
}
