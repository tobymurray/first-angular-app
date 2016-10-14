import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Root Component</h1>
      <fa-lifecycle *ngIf="!delete"></fa-lifecycle>
      <button (click)="delete = true">Click to destroy</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
