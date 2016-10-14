import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Root Component</h1>
      <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
        <p>{{test}}</p>
      </fa-lifecycle>
      <button (click)="delete = true">Click to destroy</button>
      <button (click)="test = 'changed value'">Click to change content</button>
      <button (click)="boundValue = 2000">Click to change binding</button>
  `,
  styles: []
})
export class AppComponent {
  delete = false;
  title = 'app works!';
  test = "starting value"
  boundValue = 1000;
}
