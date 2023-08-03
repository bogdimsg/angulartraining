import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product!: Observable<Product>;

  constructor (private route: ActivatedRoute, private storage: StorageService) {}

  ngOnInit() {
    return this.product = this.getProduct();
  }

  getProduct(): Observable<Product> {
    let id = this.route.snapshot.paramMap.get("id");
    return this.storage.getProductByID(id);
  }

  onSubmit(prod: Product): void {
    this.storage.updateProductFromDB(prod);
  }

  update(): void {
    ;
  }
}
