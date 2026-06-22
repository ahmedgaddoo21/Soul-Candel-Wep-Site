import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css'
})
export class CartDrawerComponent {
  cartService = inject(CartService);
  router = inject(Router);

  close() {
    this.cartService.closeCart();
  }

  incrementQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity + 1);
  }

  decrementQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.product.id, item.quantity - 1);
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.product.id);
  }

  exploreCollections() {
    this.close();
    this.router.navigate(['/collections']);
  }

  checkoutWhatsApp() {
    const url = this.cartService.getWhatsAppCheckoutUrl();
    window.open(url, '_blank');
  }

  checkoutInstagram() {
    // Premium feature: copy detailed order to clipboard first
    const orderDetails = this.cartService.getFormattedOrderText();
    navigator.clipboard.writeText(orderDetails).then(() => {
      alert('تم نسخ تفاصيل الطلب بنجاح! سيتم توجيهك الآن إلى إنستغرام لإرسالها للبائع في رسالة خاصة.');
      const url = this.cartService.getInstagramCheckoutUrl();
      window.open(url, '_blank');
    }).catch(err => {
      // Fail-safe redirect if clipboard permission is denied
      const url = this.cartService.getInstagramCheckoutUrl();
      window.open(url, '_blank');
    });
  }
}
