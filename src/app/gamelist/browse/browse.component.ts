import { Component } from '@angular/core';
import { GenresComponent } from "../genres/genres.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { ListComponent } from "../list/list.component";
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-browse',
  imports: [GenresComponent, SearchbarComponent, ListComponent, FiltersComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {

}
