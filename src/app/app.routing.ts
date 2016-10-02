import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AppComponent } from './app.component';
const appRoutes: Routes = [
    {
        path: 'news/:category',
        component: NewsComponent
    },

    {
        path: '',
        redirectTo: '/news/general',
        pathMatch: 'full'
    },

    {
        path: 'news/:category/post/:index',
        component: NewsDetailComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

