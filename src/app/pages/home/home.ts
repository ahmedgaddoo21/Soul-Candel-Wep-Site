import { Component, OnInit, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PRODUCTS, Product } from '../../data/products';
import { CartService } from '../../services/cart.service';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  cartService = inject(CartService);
  productDetails = inject(ProductDetailsService);

  // Products from dataset
  featuredProducts = signal<Product[]>([]);
  spotlightProduct = signal<Product | null>(null);

  ngOnInit() {
    // Get featured candles (e.g. first 4 items)
    this.featuredProducts.set(PRODUCTS.slice(0, 4));
    
    // Get Rose Garden as spotlight product
    const spotlight = PRODUCTS.find(p => p.id === 'rose-garden') || PRODUCTS[0];
    this.spotlightProduct.set(spotlight);
  }

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  addToCart(product: Product, event: MouseEvent) {
    event.stopPropagation(); // prevent opening details modal
    this.cartService.addToCart(product, 1);
  }

  openDetails(product: Product) {
    this.productDetails.open(product);
  }

  orderSpotlightWhatsApp() {
    const prod = this.spotlightProduct();
    if (prod) {
      const text = encodeURIComponent(`مرحباً Soul Candle، أود طلب شراء شمعة Spotlight: ${prod.name} بسعر ${prod.price} ج.م.`);
      window.open(`https://wa.me/${this.cartService.whatsappNum()}?text=${text}`, '_blank');
    }
  }

  // Section scroll reveal animation observer
  private initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
