import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AddTrasactionButtonComponent } from './add-trasaction-button/add-trasaction-button.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalAddTransactionComponent } from '../transactions/modal-add-transaction/modal-add-transaction.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButtonModule,
    AddTrasactionButtonComponent,
    MatDialogModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly dialog = inject(MatDialog);

  openModalAddTransaction() {
    this.dialog.open(ModalAddTransactionComponent, {
      width: '30vw',
      data: {
        id: 1
      }
    });
  }
}
