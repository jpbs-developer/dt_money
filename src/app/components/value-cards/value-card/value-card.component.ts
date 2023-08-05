import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValueCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) icon = '';
  @Input({ required: true }) value = 0;
}
