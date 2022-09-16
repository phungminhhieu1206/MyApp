import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // cart: Array<Book> = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.cart = this.cartService.get();
  }

  getCart = () => {
    return this.cartService.get();
  };
}
