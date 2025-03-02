import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-achievements',
  imports: [DialogModule, FormsModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  stickers = input<any>([]);
  visible = false;

  showDialog() {
    this.visible = !this.visible
  }
}
