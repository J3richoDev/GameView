import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { gameJSON } from '../game.model';
import { GameService } from '../game.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { GameTrailerComponent } from "../game-trailer/game-trailer.component";
import { SkeletonModule } from 'primeng/skeleton';
import { PlatformIconComponent } from "../platform-icon/platform-icon.component";
import { GameDescriptionComponent } from "../game-description/game-description.component";

@Component({
  selector: 'app-game-carousel',
  imports: [CarouselModule, ButtonModule, TagModule, ImageModule, SkeletonModule, PlatformIconComponent, GameDescriptionComponent],
  templateUrl: './game-carousel.component.html',
  styleUrl: './game-carousel.component.css'
})
export class GameCarouselComponent implements OnInit {
  private df = inject(DestroyRef);
  private gameService = inject(GameService);
  isFetching = signal(false);
  error = signal('');

  svgList = ['pc', 'playstation4', 'macos', 'nintendo-switch', 'xbox-one', 'android']

  games = signal<gameJSON[]>([]);


  ngOnInit() {
    this.isFetching.set(true);
    const sub = this.gameService.loadGameList().subscribe({
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
