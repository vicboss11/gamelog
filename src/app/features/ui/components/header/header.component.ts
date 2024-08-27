import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '@environments/environment';
import { NavComponent } from '@features/ui/components/nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  appName = environment.appName;
}
