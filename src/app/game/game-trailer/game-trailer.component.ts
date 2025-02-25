import { Component, DestroyRef, ElementRef, EventEmitter, inject, input, OnDestroy, OnInit, output, signal, ViewChild } from '@angular/core';
import { GameService } from '../game.service';
import { movieJSON } from '../game.model';

@Component({
  selector: 'app-game-trailer',
  imports: [],
  templateUrl: './game-trailer.component.html',
  styleUrl: './game-trailer.component.css'
})
export class GameTrailerComponent implements OnInit {
  private gameService = inject(GameService);
  private df = inject(DestroyRef);
  isFetching = signal(false);

  gameId = input.required<number>();
  gameBg = input.required<string>();
  gameTrailer = signal<movieJSON | undefined>(undefined);


  ngOnInit(): void {
    this.isFetching.set(true);
    const sub = this.gameService.loadGameTrailer(this.gameId()).subscribe({
      next: (res) => {
        this.gameTrailer.set(res);
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
