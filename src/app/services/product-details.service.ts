import { Injectable, signal } from '@angular/core';
import { Product } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private selectedProduct = signal<Product | null>(null);

  product = this.selectedProduct.asReadonly();

  open(product: Product) {
    this.selectedProduct.set(product);
  }

  close() {
    this.selectedProduct.set(null);
  }
}
