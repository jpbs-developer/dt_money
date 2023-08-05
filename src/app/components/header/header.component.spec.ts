import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { AddTrasactionButtonComponent } from './add-trasaction-button/add-trasaction-button.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logotipo and add transaction button', () => {
    const logotipo = fixture.debugElement.query(By.css('.logotipo'));
    const addTransactionButton = fixture.debugElement.query(By.directive(AddTrasactionButtonComponent));
    expect(logotipo).toBeTruthy();
    expect(addTransactionButton).toBeTruthy();
  });
});
