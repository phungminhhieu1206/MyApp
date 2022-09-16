import { Injectable } from '@angular/core';
import { Book } from '../../interface/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Array<Book> = [];

  constructor() {}

  add(book: Book) {
    console.log('add this book to cart');
    
    this.cart.push(book);
  };

  get() {
    return this.cart;
  };

  remove = (book: Book) => {
    this.cart = this.cart.filter((b) => b != book);
  };
}
