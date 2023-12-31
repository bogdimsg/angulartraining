import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsViewComponent } from './products-details-view.component';

describe('ProductsDetailsViewComponent', () => {
  let component: ProductsDetailsViewComponent;
  let fixture: ComponentFixture<ProductsDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailsViewComponent]
    });
    fixture = TestBed.createComponent(ProductsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
