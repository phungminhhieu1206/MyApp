import { Component, OnInit } from '@angular/core';

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
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
    {
      name: 'Happy Cookbook',
      author: 'Steve Doocy',
      img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    },
  ];

  isShowing: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleBooks = () => {
    this.isShowing = !this.isShowing;
  };
}

interface Book {
  name: string;
  author: string;
  img_url: string;
}
