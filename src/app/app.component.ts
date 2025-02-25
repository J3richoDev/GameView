import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { GameService } from './game/game.service';
import { GameCarouselComponent } from "./game/game-carousel/game-carousel.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }

  title = 'GameView';
}
