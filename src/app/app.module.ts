import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular 2 Material Design
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCardModule } from '@angular2-material/card';
// Import Components

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';


// Import Services
import { NewsService } from './news/news.service';
import { SidenavComponent } from './sidenav/sidenav.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, MdSidenavModule, MdButtonModule, MdToolbarModule, MdIconModule, MdListModule, MdGridListModule, MdCardModule
  ],
  providers: [MdIconRegistry, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
