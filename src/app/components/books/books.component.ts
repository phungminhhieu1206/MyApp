import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/Book';
import { list_books } from './data_books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = list_books;

  isShowing: boolean = true;
  card: Book[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleBooks = () => {
    this.isShowing = !this.isShowing;
  };

  addToCard = (event: Book) => {
    console.log(event);
  };
}
