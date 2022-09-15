import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks = () => {
    return [
      {
    name: 'Happy Cookbook 1',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 1500,
  },
  {
    name: 'Happy Cookbook 2',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 200,
  },
  {
    name: 'Happy Cookbook 3',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 100,
  },
  {
    name: 'Happy Cookbook 4',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 1100,
  },
  {
    name: 'Happy Cookbook 5',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 50,
  },
  {
    name: 'Happy Cookbook 6',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 230,
  },
  {
    name: 'Happy Cookbook 7',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 120,
  },
  {
    name: 'Happy Cookbook 8',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 90,
  },
  {
    name: 'Happy Cookbook 9',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 520,
  },
  {
    name: 'Happy Cookbook 10',
    author: 'Steve Doocy',
    img_url: 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg',
    price: 400,
  },
    ]
  }
}
