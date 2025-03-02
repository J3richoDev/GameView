import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { PlatformIconComponent } from "../../game/platform-icon/platform-icon.component";

@Component({
  selector: 'app-list',
  imports: [ButtonModule, RouterLink, PlatformIconComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list = input.required<Array<any>>();
  genre = input<string | null>(null);
  svgList = ['pc', 'playstation4', 'macos', 'nintendo-switch', 'xbox-one', 'android']
}
