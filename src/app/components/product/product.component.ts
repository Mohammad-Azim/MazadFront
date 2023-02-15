import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() srcLink!: string;
  @Input() default!: string;
  @Input() name!: string;
  @Input() description!: string;

  updateUrl() {
    this.srcLink = this.default;
  }
}
