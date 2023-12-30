import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeButtonsComponent } from './type-buttons.component';

describe('TypeButtonsComponent', () => {
  let component: TypeButtonsComponent;
  let fixture: ComponentFixture<TypeButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TypeButtonsComponent]
    });
    fixture = TestBed.createComponent(TypeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
