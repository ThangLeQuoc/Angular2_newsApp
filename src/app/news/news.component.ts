import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { ArticleHolder } from './article-holder';
import { Article } from './news-article';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  articleHolder: ArticleHolder;
  selectedArticle : Article;
  isHidden: boolean = false;

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  category: any;

  ngOnInit() {
    //get the params meter
    this.route.params.forEach((params: Params) => {
      this.category = params['category'];
      this.newsService.getbyCategory(this.category).then(ArticleHolder => this.articleHolder = ArticleHolder);
    });

  }

  // Category List
  getbyCategory(Category: string): void{
    this.newsService.getbyCategory(Category).then(ArticleHolder => {
      this.articleHolder = ArticleHolder;
    });
  }

  getTime(Timestamp:string): string {
    let time: string;
    time = this.newsService.getTimeDistance(Timestamp);
    return time;
  }


  gotoArticleDetail(article){
    this.selectedArticle = article;
    /*
    // get the category from the url
    let category: string;
    this.route.params.forEach((params: Params) => {
      // get the category of the article and article number
      category = params['category'];
    });

    let link = ['/news', category, 'post', index];
    console.log(link);
    this.router.navigate(link);
    */

  }

  selectArticle(article){
    this.selectedArticle = article;
    this.isHidden = true;
  }

  // get more, do more....



  //

}
