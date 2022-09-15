import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name = 'The Simply Happy Cookbook';
  author = 'Steve Doocy';
  img_url = 'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg';

  constructor() {}

  ngOnInit(): void {}
}
