import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonType = 'income' | 'expense';

@Component({
  selector: 'app-type-buttons',
  standalone: true,
  imports: [NgClass],
  templateUrl: './type-buttons.component.html',
  styleUrls: ['./type-buttons.component.scss'],
})
export class TypeButtonsComponent {
  @Output() handleSelectType = new EventEmitter<ButtonType>();
  type: ButtonType = 'income';

  selectAndEmitValue(type: ButtonType) {
    this.type = type;
    this.handleSelectType.emit(type);
  }
}
