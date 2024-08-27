import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/ui/components/header/header.component';
import { FooterComponent } from "../../features/ui/components/footer/footer.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {}
