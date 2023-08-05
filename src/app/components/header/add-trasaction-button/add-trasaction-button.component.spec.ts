import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrasactionButtonComponent } from './add-trasaction-button.component';
import { By } from '@angular/platform-browser';

describe('AddTrasactionButtonComponent', () => {
  let component: AddTrasactionButtonComponent;
  let fixture: ComponentFixture<AddTrasactionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddTrasactionButtonComponent]
    });
    fixture = TestBed.createComponent(AddTrasactionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the add transaction button', () => {
    const addTransactionButton = fixture.debugElement.query(By.css('.add-transaction-button')).nativeElement as HTMLElement;
    expect(addTransactionButton).toBeTruthy();
    expect(addTransactionButton.textContent?.trim()).toBe('Nova transação')
  });

  it('should trigger (@Output addTransaction) when button click', () => {
    const addTransactionButton = fixture.debugElement.query(By.css('.add-transaction-button')).nativeElement as HTMLElement;
    const spy = spyOn(component.addTransaction, 'emit')
    addTransactionButton.click()
    expect(spy).toHaveBeenCalled()
  });




});
