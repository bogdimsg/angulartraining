import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  constructor (private storage: StorageService) {}
  productList: Observable<Product[]> = this.storage.getProducts();

  ngOnInit(): void {
    this.productList = this.storage.getProducts();
  }
}
