import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProduct } from 'src/app/modules/shared/types/add-product.types';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-product-view',
  templateUrl: './add-product-view.component.html',
  styleUrls: ['./add-product-view.component.scss']
})
export class AddProductViewComponent {
  @Output() submit = new EventEmitter();
  productForm!: FormGroup;

  constructor (private storage: StorageService) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      category: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl('', [
        Validators.required,
        Validators.min(0.1)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ])
    });
  }

  onSubmit(): void {
    // making the product
    let prod: AddProduct = {
      categoryDescription: 'new kitchen supplies',
      productWeight: 3,
      productName: this.productForm.value.name,
      productImageURL: this.productForm.value.image,
      categoryName: this.productForm.value.category,
      productPrice: this.productForm.value.price,
      productDescription: this.productForm.value.description
    };

    // this.productForm.reset();
    this.submit.emit(prod);
  }
}
