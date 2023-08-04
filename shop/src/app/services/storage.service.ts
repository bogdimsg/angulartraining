import { Injectable, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../modules/shared/types/product.types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageType } from '../modules/shared/types/storage.types';
import { AddProduct } from '../modules/shared/types/add-product.types';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {
  shoppingCartKey: string = 'shoppingCart';
  products!: Product[]; // these are the products gotten from the db
  selectedProduct!: Product;
  
  constructor (private http: HttpClient) {}
  

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():  Observable<Product[]> {
    // this is for getting the products from the db
    if (this.products)
    {
      return of(this.products);
    }
    let products = this.http.get<Product[]>(environment.apiUrl + '/products');
    return products.pipe( tap( products => this.products = products ) );
  }
  
  getProductByID(productID: string | null) : Observable<Product> {
    // get the product by its id, from the db -- refactor later to get the product from products
    let product = this.http.get<Product>(environment.apiUrl + `/products/${productID}`);
    return product.pipe(tap(product => this.selectedProduct = product));
  }
  
  getProductsCart(): Product[] {
    // get the products from the cart
    this.getProducts();
    let parsed: StorageType[] = JSON.parse(localStorage.getItem(this.shoppingCartKey)!);
    let productArr: Product[] = [];
    for (let i: number = 0; i < parsed.length; i++) {
      for (let j: number = 0; j < this.products.length; j++) {
        if (parsed[i].id === this.products[j].productID) {
          productArr.push(this.products[j]);
        }
      }
    }
    return productArr;
  }

  addProductToCart(product: Product): void {
    let parsed: StorageType[];
    let ok: boolean = false;

    if (localStorage.getItem(this.shoppingCartKey) !== null) {
      parsed = JSON.parse(localStorage.getItem(this.shoppingCartKey)!) as StorageType[];

      for (let i: number = 0; i < parsed.length; i++) {
        if (product.productID === parsed[i].id) {
          ok = true;
          parsed[i].quantity = ( Number(parsed[i].quantity) + 1 ).toString();
        }
      }

      if (!ok) {
        let temp: StorageType = {id: product.productID, quantity: "1"};
        parsed.push(temp);
        localStorage.setItem(this.shoppingCartKey, JSON.stringify(parsed));
      } else {
        localStorage.setItem(this.shoppingCartKey, JSON.stringify(parsed));
      }

    } else {
      let temp: StorageType = {id: product.productID, quantity: "1"};
      parsed = Array(temp);
      localStorage.setItem(this.shoppingCartKey, JSON.stringify(parsed));
    }
    // check if this is needed, delete after
    // since we made changes to the cart, we update the variable so that we don't have to keep getting it from localStorage (as it would be expensive)
    // this.getProducts();
  }
  
  deleteProductFromCartByID(productID: string): void {
    let parsed: StorageType[] = JSON.parse(localStorage.getItem(this.shoppingCartKey) || '[]') as StorageType[];
    for (let i: number = 0; i < parsed.length; i++) {
      if (productID === parsed[i].id) {
        // delete 1 element from index i (so just index i, the product we want to delete)
        parsed.splice(i, 1);
      }
    }
    localStorage.setItem(this.shoppingCartKey, JSON.stringify(parsed));
    // check if this is needed, delete after
    // since we made changes to the cart, we update the variable so that we don't have to keep getting it from localStorage (as it would be expensive)
    // this.getProducts();
  }

  getQuantity(product: Product): string {
    // returns 0 if the product does not exist in the shopping cart(/ local storage)
    let parsed: StorageType[] = JSON.parse(localStorage.getItem(this.shoppingCartKey) || '[]') as StorageType[];
    for (let i: number = 0; i < parsed.length; i++) {
      if (product.productID === parsed[i].id) {
        return parsed[i].quantity;
      }
    }
    return '0';
  }

  deleteFromInventory(product: Product): void {
    let del = this.http.delete(environment.apiUrl + '/products/' + product.productID).subscribe();
    // add a del unsubscribe, but where
  }

  updateProductFromDB(product: Product): void {
    let upd = this.http.put(environment.apiUrl + '/products/' + product.productID, product).subscribe();
    this.products.splice(this.products.findIndex(x => x.productID == product.productID));
    this.products.push(product);
  }

  createOrder(): void {
    let prods: StorageType[] = JSON.parse(localStorage.getItem(this.shoppingCartKey)!);
    const orderItems = new Map<string, string>();

    for (let i = 0; i < prods.length; i++) {
      orderItems.set(
        prods[i].id,
        prods[i].quantity
      );
    }

    let cre = this.http.post(environment.apiUrl + '/orders', {
      "customerId":"fe2e3cb7-6877-4b2c-b098-3506cc388268",
      "productToQuantityMap": orderItems,
      "createdAt" : "2023-07-24 09:23:08",
      "country" : "Romania",
      "city" : "Timisoara",
      "county" : "Timis",
      "street" : "Aleea Sudentilor"
    }).subscribe();
    alert("Order created!");
    // update localStorage and page (page is updated in the shopping cart component)
    localStorage.setItem(this.shoppingCartKey, '[]');
  }

  createProduct(prod: AddProduct): void {
    this.http.post(environment.apiUrl + '/products', prod).subscribe();
  }
}