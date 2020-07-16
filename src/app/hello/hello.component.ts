import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;
  switch: string;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'select menu:';
    this.switch = "one";
  }

  doSelect(val) {
    this.switch = val;
  }
}