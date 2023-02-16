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

  async getAll(): Promise<Observable<BaseResponse>> {
    return await this.http.get<BaseResponse>(this.apiUrl);
  }

  async add(data: any): Promise<Observable<any>> {
    return await this.http.post<any>(this.apiUrl, data, httpOptions);
  }

  async getById(id: string): Promise<Observable<BaseResponse>> {
    return await this.http.get<BaseResponse>(this.apiUrl + `/${id}`);
  }
}
