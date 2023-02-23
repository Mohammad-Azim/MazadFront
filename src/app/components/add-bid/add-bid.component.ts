import { Component, Input } from '@angular/core';
import { BidService } from 'src/app/services/bid/bid.service';

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.component.html',
  styleUrls: ['./add-bid.component.css'],
})
export class AddBidComponent {
  @Input() productId!: number;
  @Input() userId!: number;

  constructor(private bidService: BidService) {}

  async onSubmit(bid: AddBidComponent) {
    (await this.bidService.add(bid)).subscribe((res) => {
      console.log(res);
    });
  }
}
