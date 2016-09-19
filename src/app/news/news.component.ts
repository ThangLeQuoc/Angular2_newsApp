import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleHolder } from './article-holder';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {
  articleHolder: ArticleHolder;
  
  constructor(private newsService: NewsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    //get the params meter
    this.route.params.forEach((params: Params) => {
      let category = params['category'];
      this.newsService.getbyCategory(category).then(ArticleHolder => this.articleHolder = ArticleHolder);
    });
  }
  // Category List 
  getbyCategory(Category: string): void{
    this.newsService.getbyCategory(Category).then(ArticleHolder => {
      this.articleHolder = ArticleHolder;
    });
  }

  alert(ArticleAuthor: string): void{
    console.log("Kissed !");
  }

  // get more, do more....



  //

}
