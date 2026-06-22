import { Component, OnInit, AfterViewInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS, Product } from '../../data/products';
import { CartService } from '../../services/cart.service';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.html',
  styleUrl: './collections.css'
})
export class CollectionsComponent implements OnInit, AfterViewInit {
  cartService = inject(CartService);
  productDetails = inject(ProductDetailsService);

  // All products signal
  allProducts = signal<Product[]>([]);

  // Selected filter signal
  activeFilter = signal<string>('all');

  // Computed signal for filtered products
  filteredProducts = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.allProducts();
    }
    return this.allProducts().filter(p => p.category === filter);
  });

  ngOnInit() {
    this.allProducts.set(PRODUCTS);
  }

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
    
    // Re-trigger scroll reveal for newly rendered items
    setTimeout(() => {
      this.initScrollReveal();
    }, 50);
  }

  addToCart(product: Product, event: MouseEvent) {
    event.stopPropagation();
    this.cartService.addToCart(product, 1);
  }

  openDetails(product: Product) {
    this.productDetails.open(product);
  }

  private initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-card').forEach(el => observer.observe(el));
  }
}
