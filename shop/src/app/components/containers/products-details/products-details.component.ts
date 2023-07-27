import { Component } from '@angular/core';
import { getProductDetailsMock } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  product = getProductDetailsMock("Some Name");
}
