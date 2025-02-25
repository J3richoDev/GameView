import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './gamelist/browse/browse.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'browse',
        component: BrowseComponent
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
];
