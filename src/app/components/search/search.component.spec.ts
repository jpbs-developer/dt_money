import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let button : HTMLButtonElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.button-search')).nativeElement as HTMLButtonElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button when input value is empty', () => {
    fixture.detectChanges()  
    expect(button.disabled).toBeTruthy()
  });

  it('should enable button when input value is not empty', () => {
    component.filter = 'Search'
    fixture.detectChanges()
    expect(button.disabled).not.toBeTruthy()
  });

  it('should trigger the (@Output handleSearch) once when the button is clicked multiple times within 500ms', fakeAsync(() => {
    const spy = spyOn(component.handleSearch, 'emit')
    component.filter = 'Search'
    fixture.detectChanges()
    button.click()
    button.click()
    tick(500)
    expect(spy).toHaveBeenCalledTimes(1)
  }));

  it('should trigger the (@Output handleSearch) twice when the button is clicked within 500ms', fakeAsync(() => {
    const spy = spyOn(component.handleSearch, 'emit')
    component.filter = 'Search'
    fixture.detectChanges()
    button.click()
    tick(500)
    button.click()
    tick(500)
    expect(spy).toHaveBeenCalledTimes(2)
  }));

  it('should trigger a (@Output handleSearch) with input value when button is clicked', fakeAsync(() => {
    const spy = spyOn(component.handleSearch, 'emit')
    component.filter = 'Search'
    fixture.detectChanges()
    button.click()
    tick(500)
    expect(spy).toHaveBeenCalledWith('Search')
  }));

});
