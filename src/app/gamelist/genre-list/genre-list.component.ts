import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { GameDetailService } from '../../game-details/gamedetail.service';

@Component({
  selector: 'app-genre-list',
  imports: [],
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.css'
})
export class GenreListComponent {
  private gdService = inject(GameDetailService);
  private df = inject(DestroyRef);

  gameName = input<string>();
}
