import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MycheckService } from '../mycheck.Service';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private service: MycheckService) { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'data size: ' + this.service.size;
  }
}