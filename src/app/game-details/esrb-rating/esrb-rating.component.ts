import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-esrb-rating',
  imports: [NgOptimizedImage],
  templateUrl: './esrb-rating.component.html',
  styleUrl: './esrb-rating.component.css'
})
export class EsrbRatingComponent {
  rating = input<any>('');

  GetRatingSrc(slug: string) {
    switch (slug) {
      case 'mature':
        return 'esrb_ratings/mature.svg'
      case 'everyone-10-plus':
        return 'esrb_ratings/everyone10+.svg'

      case 'childhood':
        return 'esrb_ratings/childhood.svg'

      case 'teen':
        return 'esrb_ratings/teen.svg'

      case 'rp':
        return 'esrb_ratings/rp.svg'

      case 'adults':
        return 'esrb_ratings/adults.svg'

      default:
        return 'esrb_ratings/everyone.svg'
    }
  }
}
