import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductViewComponent } from './add-product-view.component';

describe('AddProductViewComponent', () => {
  let component: AddProductViewComponent;
  let fixture: ComponentFixture<AddProductViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductViewComponent]
    });
    fixture = TestBed.createComponent(AddProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
