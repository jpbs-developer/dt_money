import { Component } from '@angular/core';
import { ValueCardComponent } from './value-card/value-card.component';

@Component({
  selector: 'app-value-cards',
  standalone: true,
  imports: [ValueCardComponent],
  templateUrl: './value-cards.component.html',
  styleUrls: ['./value-cards.component.scss'],
})
export class ValueCardsComponent {}
