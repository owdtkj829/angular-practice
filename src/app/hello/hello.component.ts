import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MycheckService } from '../mycheck.Service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'params:' + JSON.stringify(this.route.snapshot.queryParamMap);
  }
}