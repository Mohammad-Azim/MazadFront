import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

import { GlobalComponent } from 'src/app/global.component';
import { BaseResponse } from 'src/app/models/BaseResponse';
import { GenericService } from '../generic/generic.service';

@Injectable({
  providedIn: 'root',
})
export class BidService extends GenericService {
  private hubConnection: HubConnection;

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = GlobalComponent.ApiUrl + 'bid';
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(GlobalComponent.ApiUrl + 'bid-hub')
      .build();
  }

  async getByProductId(id: string): Promise<Observable<BaseResponse>> {
    return await this.http.get<BaseResponse>(
      this.apiUrl + `/bid-by-product?productId=${id}`
    );
  }

  start(): Promise<void> {
    return this.hubConnection.start();
  }

  stop(): Promise<void> {
    return this.hubConnection.stop();
  }

  onBidAdded(): Observable<any> {
    return new Observable<any>((observer) => {
      this.hubConnection.on('BidAdded', (bid) => {
        observer.next(bid);
      });
    });
  }
}
