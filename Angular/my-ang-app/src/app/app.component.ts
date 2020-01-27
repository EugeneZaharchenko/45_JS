import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>Hello, rowld</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    // ngOnInit(): void {
    //     throw new Error("Method not implemented.");
    // }
  title = 'my-ang-app';
  isShow = false;

  constructor() {
    // debugger
  }

  ngOnInit(): void {
    // debugger
  }

  onInput(event): void {
    this.title = event.target.value;
  }

  onGetInputValue(value): void {
    console.log(value)
  }

  onEmitData(data) {
    console.log(data);
  }
}
