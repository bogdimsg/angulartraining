// import { ProductDetails } from "../modules/shared/types/mock-types/product-details.types";
// import { Product } from "../modules/shared/types/product.types";

// export function getProductDetailsMock(name:string = "product0"):ProductDetails{
//     return {
//         name : name,
//         category: "string",
//         price: 10,
//         description: "string"
//     };
// }

// export function getProductsDetailsMock(howMany:number): ProductDetails[]{
//     const products = [];
//     for(let i = 0; i < howMany; i++){
//         products.push(getProductDetailsMock(`product${i}`))
//     }
//     return products;
// }

// export function getProductMock(name: string = "product0"): Product{
//     return {
//         id: Math.floor(Math.random() * (fullProducts.length + 1)).toString(),
//         quantity: 1
//     };
// }

// export function getProductsMock(howMany: number): Product[]{
//     const products = [];
//     for(let i = 0; i < howMany; i++){
//         products.push(getProductMock(`product${i}`))
//     }
//     return products;
// }

// export function getProductMockById(id: string): Product {
//     let product: Product = getProductDetailsMock();
//     return product;
// }