import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  getCart() {
    console.log('get cart form cart components');
    return this.cartService.get();
  };
}
