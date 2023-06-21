import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrikiComponent } from './components/triki/triki.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports:[RouterModule, NavbarComponent, TrikiComponent]
})
export class AppComponent {
  title = 'tres-en-raya';
}
