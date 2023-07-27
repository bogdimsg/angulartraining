import { ProductDetails } from "../types/product.types";

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