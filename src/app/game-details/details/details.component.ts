import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { GameDetailService } from '../gamedetail.service';
import { Skeleton } from 'primeng/skeleton';
import { GalleriaModule } from 'primeng/galleria';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { EsrbRatingComponent } from "../esrb-rating/esrb-rating.component";
import { PlatformIconComponent } from "../../game/platform-icon/platform-icon.component";

@Component({
  selector: 'app-details',
  imports: [Skeleton, GalleriaModule, NgOptimizedImage, EsrbRatingComponent, DatePipe, PlatformIconComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  private gdService = inject(GameDetailService);
  private df = inject(DestroyRef);

  gameId = input.required<string>();
  selectedGame = signal<any>('');
  screenshots = signal<any[]>([]);
  isFetching = signal(false);
  svgList = ['pc', 'playstation4', 'macos', 'nintendo-switch', 'xbox-one', 'android']
  showMore: boolean = false;
  descriptionLimit: number = 500;


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

  toggleShowMore() {
    this.showMore = !this.showMore;
  }

  getDisplayedDescription(description: string): string {
    return this.showMore ? description : description.slice(0, this.descriptionLimit) + (description.length > this.descriptionLimit ? '...' : '');
  }

}
