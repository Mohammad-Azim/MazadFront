import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() default!: string;
  description!: string;
  id!: number;
  name!: string;
  srcLink!: string;

  product: any;

  productId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId != null) {
      (await this.productService.getById(this.productId)).subscribe(
        (response) => {
          this.id = response.data.id;
          this.name = response.data.name;
          this.srcLink = response.data.image;
          this.description = response.data.description;
          console.log(response.data.image);
        }
      );
    }
  }

  updateUrl() {
    this.srcLink = this.default;
  }
}
