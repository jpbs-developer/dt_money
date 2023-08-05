import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCardComponent } from './value-card.component';
import { By } from '@angular/platform-browser';

describe('ValueCardComponent', () => {
  let component: ValueCardComponent;
  let fixture: ComponentFixture<ValueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValueCardComponent]
    });
    fixture = TestBed.createComponent(ValueCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title with value the (@Input title) when (@Input title) is populated ', () => {
    component.title = 'Input'
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.title')).nativeElement as HTMLElement
    expect(title.textContent?.trim()).toBe('Input')
  });

  it('should render value with value the (@Input value) when (@Input value) is populated ', () => {
    component.value = 300
    fixture.detectChanges();
    const value = fixture.debugElement.query(By.css('.value')).nativeElement as HTMLElement
    expect(value.textContent?.trim()).toBe('300')
  });

});
