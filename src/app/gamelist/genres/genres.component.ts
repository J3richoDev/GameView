import { Component, DestroyRef, EventEmitter, inject, Output, signal } from '@angular/core';
import { GameListService } from '../gamelist.service';
import { GameCarouselComponent } from '../../game/game-carousel/game-carousel.component';
import { TagModule } from 'primeng/tag';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Skeleton } from 'primeng/skeleton';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres',
  imports: [CarouselModule, TagModule, ButtonModule, Skeleton],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent {
  private df = inject(DestroyRef);
  private glService = inject(GameListService);
  isFetching = signal(false);
  error = signal('');

  @Output() genreSelected = new EventEmitter<string>();
  genres = signal<any[]>([]);
  selectedGenre = signal<string | null>(null);

  ngOnInit() {
    this.isFetching.set(true);
    const sub = this.glService.loadGenres().subscribe({
      next: (res) => {
        console.log(res);
        this.genres.set(res);
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

  selectGenre(genre: string) {
    this.selectedGenre.set(genre);
    this.genreSelected.emit(genre);
  }
}
