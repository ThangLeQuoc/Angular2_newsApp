import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Article } from './news-article';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  articles: Article[];
  selectedArticle : Article;
  isHidden: boolean = false;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  category:string = "general";

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.category = params['category'];
      console.log(this.category);
      this.newsService.getByCategory(this.category)
        .then(res => {
          this.articles = res;
          console.log(this.articles);
        });
    });

  }

  getTime(Timestamp:string): string {
      let time: string;
    time = this.newsService.getTimeDistance(Timestamp);
    return time;
  }

  selectArticle(article){
    this.selectedArticle = article;
    this.isHidden = true;
  }
}
