import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-trasaction-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button
      (click)="addTransaction.emit()"
      mat-flat-button
      color="primary"
      class="add-transaction-button"
    >
      Nova transação
    </button>
  `,
  styleUrls: ['./add-transaction-button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTrasactionButtonComponent {
  @Output() addTransaction = new EventEmitter<void>();
}
