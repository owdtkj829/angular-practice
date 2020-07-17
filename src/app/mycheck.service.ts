import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycheckService {

  constructor() {
    this.name = '(no-name)';
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  //helloメソッド
  hello() {
    return "Hello," + this.name + "!!";
  }
}
