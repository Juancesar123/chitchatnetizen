import { Component } from '@angular/core';

/**
 * Generated class for the PageEmojiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'page-emoji',
  templateUrl: 'page-emoji.html'
})
export class PageEmojiComponent {

  text: string;

  constructor() {
    console.log('Hello PageEmojiComponent Component');
    this.text = 'Hello World';
  }

}
