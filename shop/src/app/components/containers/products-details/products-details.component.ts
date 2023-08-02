import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})

export class ProductsDetailsComponent {
  constructor (private route: ActivatedRoute, private storage: StorageService) {}
  product!: Observable<Product>;
  
  ngOnInit() {
    return this.product = this.getProduct();
  }

  getProduct(): Observable<Product> {
    let id = this.route.snapshot.paramMap.get("id");
    return this.storage.getProductByID(id);
  }
}
