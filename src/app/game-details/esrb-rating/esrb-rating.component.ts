import { Component, input } from '@angular/core';

@Component({
  selector: 'app-esrb-rating',
  imports: [],
  templateUrl: './esrb-rating.component.html',
  styleUrl: './esrb-rating.component.css'
})
export class EsrbRatingComponent {
  rating = input<any>('');
}
