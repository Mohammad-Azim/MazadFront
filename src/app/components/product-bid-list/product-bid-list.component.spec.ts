import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBidListComponent } from './product-bid-list.component';

describe('ProductBidListComponent', () => {
  let component: ProductBidListComponent;
  let fixture: ComponentFixture<ProductBidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
