import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../layouts/home-layout/home-layout.component';

@Component({
  standalone: true,
  imports: [HomeLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
