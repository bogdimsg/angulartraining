import { ProductDetails } from "../modules/shared/types/product-details.types";
import { ShoppingCartProduct } from "../modules/shared/types/shopping-cart-product.types";

export function getProductDetailsMock(name:string = "product1"):ProductDetails{
    return {
        name : name,
        category: "string",
        price: 10,
        description: "string"
    };
}

export function getProductsDetailsMock(howMany:number):ProductDetails[]{
    const products = [];
    for(let i = 0; i < howMany; i++){
        products.push(getProductDetailsMock(`product${i}`))
    }
    return products;
}

export function getProductMock(name:string = "product1"):ShoppingCartProduct{
    return {
        name : name,
        category: "string",
        price: 10,
        quantity: 1
    };
}

export function getProductsMock(howMany:number):ShoppingCartProduct[]{
    const products = [];
    for(let i = 0; i < howMany; i++){
        products.push(getProductMock(`product${i}`))
    }
    return products;
}