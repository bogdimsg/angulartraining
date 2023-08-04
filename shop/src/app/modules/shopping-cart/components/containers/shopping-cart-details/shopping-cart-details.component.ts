import { Component } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  products: Product[] = this.storage.getProductsCart();

  constructor(private storage: StorageService) {}

  handleDelete(productID: string): void {
    this.storage.deleteProductFromCartByID(productID);
    this.update();
  }

  update(): void {
    this.products = this.storage.getProductsCart();
  }
}
