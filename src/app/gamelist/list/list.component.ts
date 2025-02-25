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


  ngOnInit() {
    this.isFetching.set(true);
    const sub = this.glService.loadGameList().subscribe({
      next: (res) => {
        console.log(res.results);
        this.games.set(res.results);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    })
    this.df.onDestroy(() => {
      sub.unsubscribe();
    })
  }
}
