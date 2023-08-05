import { Component } from '@angular/core';
import {  NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
