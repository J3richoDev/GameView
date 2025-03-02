import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-sort',
  imports: [SelectModule, FormsModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  sortOptions = [{ name: 'Trending', value: '' },
  { name: 'Alphabetical', value: 'name' },
  { name: 'New Release', value: 'released' },
  { name: 'New Updates', value: 'updates' },
  { name: 'Best Rating', value: 'rating' },
  ];

  selectedSort: any;

  @Output() sortingChanged = new EventEmitter<string>();

  changeSorting() {
    this.sortingChanged.emit(this.selectedSort.value);
  }
}
