import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { GameDetailService } from '../gamedetail.service';
import { Skeleton } from 'primeng/skeleton';
import { GalleriaModule } from 'primeng/galleria';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { EsrbRatingComponent } from "../esrb-rating/esrb-rating.component";
import { PlatformIconComponent } from "../../game/platform-icon/platform-icon.component";
import { ExpandableTextDirectiveDirective } from '../../expandable-text-directive.directive';
import { StoresComponent } from "../stores/stores.component";
import { AchievementsComponent } from "../achievements/achievements.component";

@Component({
  selector: 'app-details',
  imports: [Skeleton, GalleriaModule, NgOptimizedImage, EsrbRatingComponent, DatePipe, PlatformIconComponent, ExpandableTextDirectiveDirective, StoresComponent, AchievementsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  private gdService = inject(GameDetailService);
  private df = inject(DestroyRef);

  gameId = input.required<string>();
  selectedGame = signal<any>('');
  screenshots = signal<any[]>([]);
  stores = signal<any[]>([]);
  stickers = signal<any[]>([]);
  isFetching = signal(false);
  svgList = ['pc', 'playstation4', 'macos', 'nintendo-switch', 'xbox-one', 'android']
  descriptionLimit: number = 500;
  showMoreDescription: boolean = false;
  showMoreRequirements: boolean = false;


  ngOnInit(): void {
    this.isFetching.set(true);
    const sub = this.gdService.LoadGameDetail(this.gameId(), '').subscribe({
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
    const ss = this.gdService.LoadGameDetail(this.gameId(), '/screenshots').subscribe({
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

    const stores = this.gdService.LoadGameDetail(this.gameId(), '/stores').subscribe({
      next: (res) => {
        this.stores.set(res.results
        );
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.isFetching.set(false);
      }
    })

    const achievements = this.gdService.LoadGameDetail(this.gameId(), '/achievements').subscribe({
      next: (res) => {
        this.stickers.set(res.results
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
      ss.unsubscribe();
      stores.unsubscribe();
      achievements.unsubscribe();
    })
  }

  toggleShowMoreDescription() {
    this.showMoreDescription = !this.showMoreDescription;
  }

  toggleShowMoreRequirements() {
    this.showMoreRequirements = !this.showMoreRequirements;
  }

}
