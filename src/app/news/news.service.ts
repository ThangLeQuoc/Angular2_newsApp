import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from './news-article';
import { ArticleHolder } from './article-holder';

@Injectable()
export class NewsService {
    constructor(private http: Http) { }

    // get News Methods
    getbyCategory(Category: string): Promise<ArticleHolder> {
        var sourceUrl = '';
        switch (Category) {
            case 'general':
                sourceUrl = 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'business':
                sourceUrl = 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'entertainment':
                sourceUrl = 'https://newsapi.org/v1/articles?source=mashable&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'technology':
                sourceUrl = 'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'sport':
                sourceUrl = 'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'gaming':
                sourceUrl = 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'music':
                sourceUrl = 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            case 'science-and-nature':
                sourceUrl = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
                break;
            default:
                break;
        }
        return this.http.get(sourceUrl).toPromise().then(response => response.json() as ArticleHolder).catch(this.handleError);

    }


    // handle error
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
