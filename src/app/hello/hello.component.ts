import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hello',
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;
  myControl: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'FormBuilderを使う';
    this.myControl = this.fb.group({
      name: [''],
      mail: [''],
      age: [0]
    });
  }

  onSubmit() {
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }
}