import { Component, OnInit, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { TypeButtonsComponent } from './type-buttons/type-buttons.component';

@Component({
  selector: 'app-modal-add-transaction',
  standalone: true,
  imports: [MatDialogModule, TypeButtonsComponent],
  templateUrl: './modal-add-transaction.component.html',
  styleUrls: ['./modal-add-transaction.component.scss'],
})
export class ModalAddTransactionComponent implements OnInit {
  private readonly dialogRef = inject(
    MatDialogRef<ModalAddTransactionComponent>
  );
  private data = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    console.log(this.data);
  }
}
