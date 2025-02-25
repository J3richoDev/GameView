import { Component } from '@angular/core';
import { GameCarouselComponent } from "../game/game-carousel/game-carousel.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [GameCarouselComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
