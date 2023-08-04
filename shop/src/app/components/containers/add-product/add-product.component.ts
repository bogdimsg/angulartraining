import { Component } from '@angular/core';
import { AddProduct } from 'src/app/modules/shared/types/add-product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor (private storage: StorageService) {}

  onSubmit(prod: AddProduct): void {
    this.storage.createProduct(prod);
  }
}
