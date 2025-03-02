import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TabsModule } from 'primeng/tabs';

interface route {
  label: string,
  route: string
}

@Component({
  selector: 'app-header',
  imports: [TabsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  tabs = signal<route[]>([
    { label: 'Home', route: '/home' },
    { label: 'Browse', route: '/browse' },
    { label: 'Trailers', route: '/suggest' },
    { label: 'Contact', route: '/contact' },
    { label: 'About', route: '/about' },
  ]);

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
