import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [`
    button {
      width: 60px;
      height: 60px;
      font-size: 2rem;
      font-weight: bold;
      cursor: pointer;
    }
  `]
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
