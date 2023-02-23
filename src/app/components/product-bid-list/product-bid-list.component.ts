import { Component, Input, OnInit } from '@angular/core';
import { BidService } from 'src/app/services/bid/bid.service';
import * as signalR from '@microsoft/signalr';
import { GlobalComponent } from 'src/app/global.component';

@Component({
  selector: 'app-product-bid-list',
  templateUrl: './product-bid-list.component.html',
  styleUrls: ['./product-bid-list.component.css'],
})
export class ProductBidListComponent implements OnInit {
  bids: any[] = [];
  @Input() productId!: string;

  connection = new signalR.HubConnectionBuilder()
    .withUrl(GlobalComponent.ApiUrl + 'bid-hub')
    .build();

  constructor(private bidService: BidService) {}

  async ngOnInit(): Promise<void> {
    (await this.bidService.getByProductId(this.productId)).subscribe(
      (response) => {
        this.bids = response.data;
      }
    );

    this.connection.on('BidAdded', (bid) => {
      if (bid.productId == this.productId) {
        this.bids.push(bid);
      }
    });
    this.connection.start().catch((err) => document.write(err));
  }

  ngOnDestroy(): void {
    this.connection.stop();
  }
}
