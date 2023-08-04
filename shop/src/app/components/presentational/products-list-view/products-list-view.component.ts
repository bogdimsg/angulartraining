import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss']
})

export class ProductsListViewComponent {
  @Input() productList: Observable<Product[]> | undefined;

  constructor (private storage: StorageService) {}

  addItemToCart(product: Product) {
    this.storage.addProductToCart(product);
  }
}
