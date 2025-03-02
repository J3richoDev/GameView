import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-filters',
  imports: [PanelMenuModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  items2 = [{
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

  @Output() filtersChanged = new EventEmitter<any>();

  filters: any = {
    search: '',
    parent_platforms: '',
    genres: ''
  };

  items = [
    {
      label: 'Platform',
      items: [
        { label: 'PC', command: () => this.applyFilter('parent_platforms', '1') },
        { label: 'PlayStation', command: () => this.applyFilter('parent_platforms', '2') },
        { label: 'Xbox', command: () => this.applyFilter('parent_platforms', '3') }
      ]
    },
    {
      label: 'Genres',
      items: [
        { label: 'Action', command: () => this.applyFilter('genres', 'action') },
        { label: 'Adventure', command: () => this.applyFilter('genres', 'adventure') },
        { label: 'RPG', command: () => this.applyFilter('genres', 'rpg') }
      ]
    }
  ];

  applyFilter(key: string, value: string) {
    this.filters[key] = value;
    this.filtersChanged.emit(this.filters);
  }
}
