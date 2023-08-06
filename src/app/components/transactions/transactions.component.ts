import { Component } from '@angular/core';
import { Transaction, TransactionCardComponent } from './transaction-card/transaction-card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [TransactionCardComponent, NgForOf],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions: Transaction[] = [
    {
      name: 'T1',
      value: 200,
      category: 'Venda',
      date: '21/10/2024',
      type: 'input'
    },
    {
      name: 'T2',
      value: 2006,
      category: 'Lanche',
      date: '21/10/2027',
      type: 'output'
    }
  ]
}
