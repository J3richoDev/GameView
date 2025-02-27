import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { GameDetailService } from '../gamedetail.service';
import { Skeleton } from 'primeng/skeleton';
import { GalleriaModule } from 'primeng/galleria';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { EsrbRatingComponent } from "../esrb-rating/esrb-rating.component";

@Component({
  selector: 'app-details',
  imports: [Skeleton, GalleriaModule, NgOptimizedImage, EsrbRatingComponent, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  gameId = input.required<string>();
  selectedGame = signal<any>('');
  screenshots = signal<any[]>([]);
  isFetching = signal(false);
  private gdService = inject(GameDetailService);
  private df = inject(DestroyRef);


  ngOnInit(): void {
    this.isFetching.set(true);
    const sub = this.gdService.LoadGameDetail(this.gameId()).subscribe({
      next: (res) => {
        this.selectedGame.set(res)
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    })
    const sub2 = this.gdService.LoadGameScreenshots(this.gameId()).subscribe({
      next: (res) => {
        this.screenshots.set(
          res.results.map((screenshot: { image: string }) => ({
            itemImageSrc: screenshot.image,
            thumbnailImageSrc: screenshot.image
          }))
        );
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
      sub2.unsubscribe();
    })
  }
}
