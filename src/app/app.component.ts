import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding'

@Component({
  selector: 'app-root',
  template: `
      <h1>Root Component</h1>
      <fa-databinding></fa-databinding>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
