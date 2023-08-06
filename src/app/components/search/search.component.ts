import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  private subject = new Subject<string>()
  destroyRef = inject(DestroyRef)
  filter = ''

  @Output() handleSearch = new EventEmitter<string>();

  ngOnInit(): void {    
    this.subject.asObservable().pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef)).subscribe((filter) =>
      this.handleSearch.emit(filter)
    )
  }

  search() {
    this.subject.next(this.filter)
  }


}
