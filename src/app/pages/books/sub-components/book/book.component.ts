import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from 'src/app/interface/Book';
import { CartService } from 'src/app/pages/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  /**
   * dùng Output để bắt dữ liệu book_item ra thẻ cha của nó
   * khi dùng service thì đẩy dữ liệu ra service luôn
   * @param cartService
   */
  // @Output() bookEmitter = new EventEmitter<Book>();

  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart = () => {
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  };

  removeFormCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
