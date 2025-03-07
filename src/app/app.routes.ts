import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './gamelist/browse/browse.component';
import { DetailsComponent } from './game-details/details/details.component';
import { GenreListComponent } from './gamelist/genre-list/genre-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'browse',
        component: BrowseComponent,
    },
    {
        path: 'browse/:genreName',
        component: GenreListComponent
    },
    {
        path: 'suggest',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: HomeComponent
    },
    {
        path: 'about',
        component: HomeComponent
    },
    {
        path: 'game/:gameId',
        component: DetailsComponent
    }
];
