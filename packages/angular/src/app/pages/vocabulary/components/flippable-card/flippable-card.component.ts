import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-flipable-card',
  templateUrl: './flippable-card.component.html',
  styleUrls: ['./flippable-card.component.scss'],
})
export class FlippableCardComponent {
  flip = false;
  constructor() {}
}
