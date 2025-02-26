import { Component, DestroyRef, inject, signal } from '@angular/core';
import { GameListService } from '../gamelist.service';
import { ButtonModule } from 'primeng/button';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-list',
  imports: [ButtonModule, Skeleton],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private df = inject(DestroyRef);
  private glService = inject(GameListService);
  isFetching = signal(false);
  error = signal('');

  games = signal<any[]>([]);
  currentPage = signal(1);
  nextPage = signal<string | null>(null);
  prevPage = signal<string | null>(null);

  ngOnInit() {
    this.loadGames(this.currentPage());
  }

  loadGames(page: number) {
    this.isFetching.set(true);
    const sub = this.glService.loadGameList(page).subscribe({
      next: (res) => {
        console.log(res.results);
        this.games.set(res.results);
        this.nextPage.set(res.next);
        this.prevPage.set(res.previous);
        this.currentPage.set(page);
      },
      error: (e) => {
        console.log(e);
        this.error.set('Failed to load games.');
      },
      complete: () => {
        this.isFetching.set(false);
      }
    });

    this.df.onDestroy(() => {
      sub.unsubscribe();
    });
  }

  goToNextPage() {
    if (this.nextPage()) {
      this.loadGames(this.currentPage() + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPrevPage() {
    if (this.prevPage()) {
      this.loadGames(this.currentPage() - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
