import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NewsService } from '../news/news.service';
import { Article } from '../news/news-article';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  
  @Input() article: Article;
  constructor(private newsService: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  explore(Url: string): void{
    window.open(Url);
  }
}
