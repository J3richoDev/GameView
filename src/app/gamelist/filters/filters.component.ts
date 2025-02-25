import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-filters',
  imports: [PanelMenuModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  items = [{
    label: 'genre',
    items: [
      { "label": "Action" },
      { "label": "Indie" },
      { "label": "Adventure" },
      { "label": "RPG" },
      { "label": "Strategy" },
      { "label": "Shooter" },
      { "label": "Casual" },
      { "label": "Simulation" },
      { "label": "Puzzle" },
      { "label": "Arcade" },
      { "label": "Platformer" },
      { "label": "Massively Multiplayer" },
      { "label": "Racing" },
      { "label": "Sports" },
      { "label": "Fighting" },
      { "label": "Family" },
      { "label": "Board Games" },
      { "label": "Card" },
      { "label": "Educational" }
    ]
  },
  {
    label: 'type',
    items: [
      { label: 'action' }
    ]
  },
  ]
}
