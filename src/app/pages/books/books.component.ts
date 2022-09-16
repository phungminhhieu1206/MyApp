import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  isShowing: boolean = true;
  card: Book[] = [];

  constructor(private booksService: BooksService) {
    console.log({ contructor: 'Contructor run' });
  }

  ngOnInit(): void {
    console.log({ OnInit: 'OnInit run and start get api' });
    this.books = this.booksService.getBooks();
  }

  toggleBooks = () => {
    this.isShowing = !this.isShowing;
  };

  addToCart = (event: Book) => {
    console.log(event);
  };
}
