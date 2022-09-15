import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  name: string = 'The Simply Happy Cookbook';
  author: string = 'Steve Doocy';
  img_url: string =
    'https://cdn-amz.woka.io/images/I/81HE+JDes-L._SR476,476_.jpg';

  isDisabled: boolean = false;
  isHiddenButton: boolean = true;

  constructor() {}

  clickButton = () => {
    this.isDisabled = true;
    this.isHiddenButton = false;
    alert('You have just click button "Show Books"');
  };

  showButton = () => {
    this.isDisabled = false;
    this.isHiddenButton = true;
  };

  myName: string = '';
  handlerInput = (event: any) => {
    console.log(event.target.value);
    this.myName = event.target.value;
  };

  ngOnInit(): void {}
}
