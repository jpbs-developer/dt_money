import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCardsComponent } from './value-cards.component';
import { By } from '@angular/platform-browser';
import { ValueCardComponent } from './value-card/value-card.component';
import { NgOptimizedImage } from '@angular/common';

describe('ValueCardsComponent', () => {
  let component: ValueCardsComponent;
  let fixture: ComponentFixture<ValueCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValueCardsComponent, NgOptimizedImage]
    });
    fixture = TestBed.createComponent(ValueCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cardsValues', () => {
    const cards = fixture.debugElement.queryAll(By.directive(ValueCardComponent))
    expect(cards.length).toBe(3)
  });
});
