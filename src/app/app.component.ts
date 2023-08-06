import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ValueCardsComponent } from './components/value-cards/value-cards.component';
import { SearchComponent } from './components/search/search.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, ValueCardsComponent, SearchComponent, TransactionsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  search(event: string) { }


}
