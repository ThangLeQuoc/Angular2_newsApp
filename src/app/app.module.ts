import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

// Import Services
import { NewsService } from './news/news.service';

// routing config
import { routing } from './app.routing';
import {CommentBoxComponent} from "./news-detail/comment-box/comment-box.component";
import {CommentComponent} from "./news-detail/comment-box/comment-list/comment/comment.component";
import {CommentListComponent} from "./news-detail/comment-box/comment-list/comment-list.component";
import {CommentFormComponent} from "./news-detail/comment-box/comment-form/comment-form.component";
import {MaterialModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailComponent,
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, routing,
    MaterialModule.forRoot()
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
