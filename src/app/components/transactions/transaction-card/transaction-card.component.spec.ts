import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transaction, TransactionCardComponent } from './transaction-card.component';
import { By } from '@angular/platform-browser';




describe('TransactionCardComponent', () => {
  let component: TransactionCardComponent;
  let fixture: ComponentFixture<TransactionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransactionCardComponent]
    });
    fixture = TestBed.createComponent(TransactionCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate template when data arrives', () => {
    const transaction: Transaction = {
      name: 'Desenvolvimento de site',
      value: 12000,
      category: 'Venda',
      date: '21/03/2024',
      type: 'input'
    }
    component.transaction = transaction
    fixture.detectChanges()

    const name = getElement('.name')
    const value = getElement('.value')
    const category = getElement('.category')
    const date = getElement('.date')

    expect(name.textContent?.trim()).toBe(transaction?.name);
    expect(value.textContent?.trim()).toBe(`R$12,000.00`);
    expect(category.textContent).toBe(transaction.category);
    expect(date.textContent).toBe(transaction.date);
  });

  it('must add red color in value when transaction type is output', () => {
    const transaction: Transaction = {
      name: 'Desenvolvimento de site',
      value: 12000,
      category: 'Venda',
      date: '21/03/2024',
      type: 'output'
    }
    component.transaction = transaction
    fixture.detectChanges()
    const value = getElement('.value')
    expect(value.classList.contains('text-red-100')).toBeTrue()
    expect(value.textContent?.startsWith('-')).toBeTrue()
  });

  it('must add green color in value when transaction type is inpout', () => {
    const transaction: Transaction = {
      name: 'Desenvolvimento de site',
      value: 12000,
      category: 'Venda',
      date: '21/03/2024',
      type: 'input'
    }
    component.transaction = transaction
    fixture.detectChanges()
    const value = getElement('.value')
    expect(value.classList.contains('text-green-100')).toBeTrue()
    expect(value.textContent?.startsWith('-')).not.toBeTrue()
  });

  function getElement(selector: string): HTMLElement {
    return fixture.debugElement.query(By.css(selector)).nativeElement
  }
});
