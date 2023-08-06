import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Transaction = {
  name: string,
  value: number
  category: string
  date: string
  type: 'input' | 'output'| ''
}

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionCardComponent {
  @Input({ required: true }) transaction!: Transaction
}
