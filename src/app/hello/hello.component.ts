import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  template: `
    <div div id="body" >
      <h1>
          {{title}}
      </h1>
      <p>
          {{ message }}
      </p>
    </div>
  `
})
export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Hello-app';
    this.message = 'This is inline-template';
  }
}
