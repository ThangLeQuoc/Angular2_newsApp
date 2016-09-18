import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from './news-article';
import { ArticleHolder } from './article-holder';

@Injectable()
export class NewsService {
    constructor(private http: Http) { }
    
    
    /* this shit is not used yet.. :/ 
    // header
    private headers = new Headers({ 'Content-Type': 'application/json' });
     */
    // get News Methods
    getbyCategory(Category: string): Promise<ArticleHolder> {
        if (Category === 'business') {
            var sourceUrl = 'https://newsapi.org/v1/articles?source=business-insider&sortBy=top&apiKey=b1a9eb71513f43d49c154dd48427a833';
            return this.http.get(sourceUrl).toPromise().then(response => response.json() as ArticleHolder).catch(this.handleError);
        }

    }


    // handle error
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
