import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;

  constructor() {}

  ngOnInit(): void {}
}
