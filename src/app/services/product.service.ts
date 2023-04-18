import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  constructor() {
    this.products = [
      {
        name: 'Television',
        price: 8000,
        description:
          'Television 14 Pulgadas.',
        photo: 'https://www.picsum.photos/420',
        calification: 4,
        category: 'Electrónicos',
        sku: '1',
        opinions: [
          {
            id: '1',
            name: 'Daniel',
            calification: 3,
            comment: 'Sirve para su cometido.',
          },
        ],
      },
      {
        name: 'Bocina',
        price: 1500,
        description:
          'Bocina bluetooth.',
        photo: 'https://www.picsum.photos/420',
        calification: 4,
        category: 'Electrónicos',
        sku: '2',
        opinions: [
          {
            id: '2',
            name: 'Daniel',
            calification: 4,
            comment: 'Pesimo sonido.',
          },
        ],
      },
      {
        name: 'Roku',
        price: 3500,
        description:
          'Reproductor streaming para TVs.',
        photo: 'https://www.picsum.photos/420',
        calification: 4,
        category: 'Electrónicos',
        sku: '3',
        opinions: [
          {
            id: '3',
            name: 'Dniel',
            calification: 1,
            comment: 'Caro para lo que cuesta',
          },
        ],
      },
    ];
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find((product) => product.sku === id);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  updateProduct(product: Product) {
    const index = this.products.findIndex((item) => item.sku === product.sku);
    this.products[index] = product;
  }

  deleteProduct(id: string) {
    const index = this.products.findIndex((item) => item.sku === id);
    this.products.splice(index, 1);
  }
}
