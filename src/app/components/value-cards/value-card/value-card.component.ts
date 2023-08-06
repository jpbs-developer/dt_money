import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) icon = '';
  @Input({ required: true }) value = 0;
  @Input() bg = '#323238';
}
