import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title: string = "TITLE";
  isEdit: boolean = true;
  imgSource: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSniecZyQo7NHC00QVvZv8D82WPoaM7MjRH-1tAZVnHME4mfLshjA&s';
  flag: boolean = false;
  valueX: number = 0;
  valueY: number = 0;
  result: number;

  settings = {
    text: true,
    border: false,
    bg: false
  };

  constructor() { }

  items = [
    '1',
    '2',
    '3',
    '4'
  ];

  items_person = [
    {
      name: "Ivan",
      age: 10
    },
    {
      name: "Ivan",
      age: 20
    },
    {
      name: "Ivan",
      age: 30
    },
    {
      name: "Ivan",
      age: 40
    }
  ];

  ngOnInit() {
  }

  getBookName(): string {
    return this.title;
  }

  changeMode() {
    this.isEdit = !this.isEdit
  }

  changeImage() {
    this.imgSource = "http://citramon.net/uploads/images/topic/2014/01/19/a07ae75462_1000.jpg"
  }

  calc(): void {
    this.result = +this.valueX + +this.valueY
  }

  reset() {
    this.valueX = this.valueY = 0;
    this.result = undefined
  }

}
