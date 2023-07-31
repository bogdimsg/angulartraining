import { Component, Input } from '@angular/core';
import { ShoppingCartProduct } from 'src/app/modules/shared/types/shopping-cart-product.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
  @Input() products: ShoppingCartProduct[] | undefined;
}
