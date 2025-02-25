import { Component, input } from '@angular/core';

@Component({
  selector: 'app-platform-icon',
  imports: [],
  templateUrl: './platform-icon.component.html',
  styleUrl: './platform-icon.component.css'
})
export class PlatformIconComponent {
  icon = input.required();
}
