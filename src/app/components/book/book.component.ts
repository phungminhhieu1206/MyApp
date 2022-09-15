import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from 'src/app/interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  myInterval: any = null;

  constructor() {}

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    console.log({ onDestroy: 'Destroy book !' });
  }

  ngOnInit(): void {
    this.myInterval = setInterval(() => {
      console.log('Book Init !');
    }, 1000);
  }

  addToCard = () => {
    this.bookEmitter.emit(this.book);
  };
}
