import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // State using Angular Signals
  private cartItems = signal<CartItem[]>([]);
  private isDrawerOpen = signal<boolean>(false);
  
  // Target contact configurations (editable placeholder)
  private whatsappNumber = signal<string>('201234567890'); // Egyptian number format (e.g. +20 123 456 7890)
  private instagramUsername = signal<string>('soulcandle'); // IG username

  // Expose signals for component consumption
  items = this.cartItems.asReadonly();
  isOpen = this.isDrawerOpen.asReadonly();
  
  whatsappNum = this.whatsappNumber.asReadonly();
  instagramUser = this.instagramUsername.asReadonly();

  // Computed signals for derived states
  totalCount = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.quantity, 0);
  });

  totalPrice = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  });

  isEmpty = computed(() => {
    return this.cartItems().length === 0;
  });

  openCart() {
    this.isDrawerOpen.set(true);
  }

  closeCart() {
    this.isDrawerOpen.set(false);
  }

  toggleCart() {
    this.isDrawerOpen.update(open => !open);
  }

  addToCart(product: Product, quantity = 1) {
    this.cartItems.update(items => {
      const existingItem = items.find(item => item.product.id === product.id);
      if (existingItem) {
        return items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...items, { product, quantity }];
    });
    // Open the cart automatically when a product is added
    this.isDrawerOpen.set(true);
  }

  removeFromCart(productId: string) {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    
    this.cartItems.update(items => 
      items.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }

  // Generate checkout text messages
  getFormattedOrderText(): string {
    let message = `مرحباً Soul Candle، أود تقديم طلب شراء:\n`;
    this.cartItems().forEach((item, index) => {
      message += `${index + 1}. شمعة ${item.product.name} - العدد: ${item.quantity} - السعر: ${item.product.price * item.quantity} ج.م\n`;
    });
    message += `\nإجمالي الحساب: ${this.totalPrice()} ج.م\n`;
    message += `يرجى تأكيد الطلب وإرسال تفاصيل التوصيل.`;
    return message;
  }

  getWhatsAppCheckoutUrl(): string {
    const text = encodeURIComponent(this.getFormattedOrderText());
    return `https://wa.me/${this.whatsappNumber()}?text=${text}`;
  }

  getInstagramCheckoutUrl(): string {
    // Copy summary to clipboard if window context exists (handled in component)
    return `https://instagram.com/${this.instagramUsername()}`;
  }
}
