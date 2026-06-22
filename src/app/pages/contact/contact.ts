import { Component, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements AfterViewInit {
  cartService = inject(CartService);

  // Form Fields
  name = signal<string>('');
  email = signal<string>('');
  interest = signal<string>('');
  message = signal<string>('');

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  submitInquiry(event: Event) {
    event.preventDefault();

    // Format inquiry details
    const inquiryText = `طلب استفسار جديد من الموقع:\n` +
      `- الاسم: ${this.name()}\n` +
      `- البريد الإلكتروني: ${this.email()}\n` +
      `- طبيعة الاستفسار: ${this.getInterestLabel(this.interest())}\n` +
      `- الرسالة: ${this.message()}`;

    // Open WhatsApp
    const url = `https://wa.me/${this.cartService.whatsappNum()}?text=${encodeURIComponent(inquiryText)}`;
    window.open(url, '_blank');

    // Reset Form
    this.name.set('');
    this.email.set('');
    this.interest.set('');
    this.message.set('');
    alert('تم تجهيز استفسارك! سيتم توجيهك إلى واتساب لإرساله.');
  }

  private getInterestLabel(interest: string): string {
    switch(interest) {
      case 'signature': return 'المجموعة الأساسية (Signature)';
      case 'custom': return 'طلب مخصص (Bespoke)';
      case 'wholesale': return 'شراكة تجارية / جملة';
      default: return 'أخرى';
    }
  }

  private initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(element => {
      observer.observe(element);
    });
  }
}
