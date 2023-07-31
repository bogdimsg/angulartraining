import { Component } from '@angular/core';
import { getProductsMock } from 'src/app/mocks/products.mocks';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  products = getProductsMock(10);
}
