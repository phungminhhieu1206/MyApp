import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
      price: 500,
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleBooks = () => {
    this.isShowing = !this.isShowing;
  };
}
