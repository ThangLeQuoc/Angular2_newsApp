import { Component, OnInit } from '@angular/core';

import { ArticleHolder } from './article-holder';
import { NewsService } from './news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
export class NewsComponent implements OnInit {

  // create ArticleHolder object
  
  //articleHolder = new ArticleHolder;
  
  // This shit not work 
  articleHolder: ArticleHolder;
  
  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getBusinessArticles();

  }
  // Category List 

  getBusinessArticles(): void {
    this.newsService.getbyCategory('business').then(ArticleHolder => {
      this.articleHolder = ArticleHolder;
    });
  }

  alert(ArticleAuthor: string): void{
    console.log("Kissed !");
  }

  // get more, do more....



  //

}
