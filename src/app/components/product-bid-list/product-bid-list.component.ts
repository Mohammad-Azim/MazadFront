import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BidService } from 'src/app/services/bid/bid.service';
import { Subscription } from 'rxjs';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-product-bid-list',
  templateUrl: './product-bid-list.component.html',
  styleUrls: ['./product-bid-list.component.css'],
})
export class ProductBidListComponent {
  //implements OnInit, OnDestroy
  bids: any[] = [];
  @Input() productId!: string;
  private bidSubscription!: Subscription;

  constructor(private bidService: BidService) {}

  async ngOnInit(): Promise<void> {
    (await this.bidService.getByProductId(this.productId)).subscribe(
      (response) => {
        this.bids = response.data;
      }
    );
  }

  connection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:7287/api/bid-hub')
    .build();

  ngOnChanges() {
    this.connection.on('BidAdded', (bid) => {
      if (bid.productId == this.productId) {
        this.bids.push(bid);
      }
    });
    this.connection.start().catch((err) => document.write(err));
  }
}
