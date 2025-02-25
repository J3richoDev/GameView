import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-description',
  imports: [],
  templateUrl: './game-description.component.html',
  styleUrl: './game-description.component.css'
})
export class GameDescriptionComponent {
  private gameService = inject(GameService);
  private df = inject(DestroyRef);
  isFetching = signal(false);

  gameId = input.required<number>();
  gameDesc = signal<any>('');


  ngOnInit(): void {
    this.isFetching.set(true);
    const sub = this.gameService.loadGameDescription(this.gameId()).subscribe({
      next: (res) => {
        this.gameDesc.set(res);
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
