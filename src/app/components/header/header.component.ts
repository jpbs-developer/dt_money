import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AddTrasactionButtonComponent } from './add-trasaction-button/add-trasaction-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, AddTrasactionButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
