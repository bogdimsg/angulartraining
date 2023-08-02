import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { ProductsListComponent } from './components/containers/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/containers/products-details/products-details.component';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'product-list', component: ProductsListComponent, title: 'Products' },
  { path: 'product-details/:id', component: ProductsDetailsComponent, title: 'Product Details' },
  { path: 'shopping-cart', component: ShoppingCartDetailsComponent, title: 'Cart' }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Shop | ${title}`);
    }
    else if (title === undefined) {
      this.title.setTitle('Shop');
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
