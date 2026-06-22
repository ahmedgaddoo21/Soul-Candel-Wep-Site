import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsService } from '../../services/product-details.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent {
  productDetails = inject(ProductDetailsService);
  cartService = inject(CartService);

  // Selected quantity inside details modal
  quantity = signal<number>(1);

  increment() {
    this.quantity.update(q => q + 1);
  }

  decrement() {
    this.quantity.update(q => q > 1 ? q - 1 : 1);
  }

  close() {
    this.quantity.set(1);
    this.productDetails.close();
  }

  addToCart() {
    const prod = this.productDetails.product();
    if (prod) {
      this.cartService.addToCart(prod, this.quantity());
      this.close();
    }
  }

  orderDirectWhatsApp() {
    const prod = this.productDetails.product();
    if (prod) {
      const text = encodeURIComponent(`مرحباً Soul Candle، أود طلب شراء شمعة: ${prod.name} (العدد: ${this.quantity()}) بسعر ${prod.price * this.quantity()} ج.م. يرجى تأكيد الطلب.`);
      const url = `https://wa.me/${this.cartService.whatsappNum()}?text=${text}`;
      window.open(url, '_blank');
    }
  }
}
