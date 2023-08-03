import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent {
  @Input() products: Product[] | undefined;
  @Output() onDelete = new EventEmitter();

  constructor (private storage: StorageService) {}

  handleDelete(productID: string): void {
    this.onDelete.emit(productID);
  }

  getQuantity(product: Product): string {
    return this.storage.getQuantity(product);
  }

  createOrder(): void {
    this.storage.createOrder();
    // update
    this.products = this.storage.getProductsCart();
  }
}
