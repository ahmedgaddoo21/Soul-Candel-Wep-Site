import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { CartDrawerComponent } from './components/cart-drawer/cart-drawer';
import { ProductDetailsComponent } from './components/product-details/product-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CartDrawerComponent, ProductDetailsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
