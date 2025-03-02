import { Component, signal } from '@angular/core';
import { GenresComponent } from "../genres/genres.component";
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { ListComponent } from "../list/list.component";
import { FiltersComponent } from "../filters/filters.component";
import { GameListService } from '../gamelist.service';
import { SortComponent } from "../sort/sort.component";
import { Skeleton } from 'primeng/skeleton';
import { single } from 'rxjs';

@Component({
  selector: 'app-browse',
  imports: [GenresComponent, SearchbarComponent, ListComponent, FiltersComponent, SortComponent, Skeleton],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  games = signal<any[]>([]);
  selectedGenre = signal<string | null>(null);
  currentPage = signal(1);
  nextPage = signal<string | null>(null);
  prevPage = signal<string | null>(null);
  filters = signal<any>({});
  sortOrder = signal<string>('');
  isFetching = signal(false);

  constructor(private glService: GameListService) {
    this.loadGames();
  }

  loadGames() {
    this.isFetching.set(true);
    let queryParams = `&page=${this.currentPage()}`;

    if (this.selectedGenre()) queryParams += `&genres=${this.selectedGenre()?.toLowerCase()}`;
    if (this.filters().search) queryParams += `&search=${this.filters().search}`;
    if (this.filters().parent_platforms) queryParams += `&parent_platforms=${this.filters().parent_platforms}`;
    if (this.sortOrder()) queryParams += `&ordering=${this.sortOrder()}`;

    this.glService.loadGameList(queryParams).subscribe({
      next: (res) => {
        this.games.set(res.results);
        this.nextPage.set(res.next);
        this.prevPage.set(res.previous);

        this.isFetching.set(false);
      },
      error: () => { console.error('Failed to load games.') }
    });
  }

  hasGenre(genre: string) {
    this.selectedGenre.set(genre);
    this.currentPage.set(1);
    this.loadGames();
  }

  applyFilters(filters: any) {
    this.filters.set(filters);
    this.currentPage.set(1);
    this.loadGames();
  }

  changeSorting(order: string) {
    this.sortOrder.set(order);
    this.currentPage.set(1);
    this.loadGames();
  }

  goToNextPage() {
    if (this.nextPage()) {
      this.currentPage.set(this.currentPage() + 1);
      this.loadGames();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPrevPage() {
    if (this.prevPage()) {
      this.currentPage.set(this.currentPage() - 1);
      this.loadGames();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  applySearch(searchText: string) {
    this.filters.update((f) => ({ ...f, search: searchText }));
    this.currentPage.set(1);
    this.loadGames();
  }
}
