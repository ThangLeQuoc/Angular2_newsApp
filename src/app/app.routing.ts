import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { SidenavComponent } from './sidenav/sidenav.component';
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
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

