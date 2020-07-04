import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  moods : Array<Object> = [];

  constructor() {
    this.moods = [
      {mood : 'mood one', icon : 'happy'},
      {mood : 'mood two', icon : 'sad'},
      {mood : 'mood three', icon : 'happy'},
      {mood : 'mood four', icon : 'sad'}
    ]
  }

}
