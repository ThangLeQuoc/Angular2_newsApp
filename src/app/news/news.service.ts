import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from './news-article';
import { ArticleHolder } from './article-holder';

@Injectable()
export class NewsService {
    constructor(private http: Http) { }

    // get News Methods
    getbyCategory(Category: string): Promise<ArticleHolder> 
    {
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



    // Time Converting Methods ---------------------------- // 
    getTimeDistance(Post_TimeStamp: string): string {
        // get current time - UTC format
        let currentTimestamp = new Date().getTime();
        let date_string = Post_TimeStamp;
        let date_converted = new Date(date_string).getTime();

        let distance = currentTimestamp - date_converted;

        let distance_dates = +this.toDate(distance);
        let distance_hours = +this.toHour(distance);
        let distance_minutes = +this.toMinutes(distance);

        let message: string = '';


        if (distance_dates < 1) {
            if (distance_hours < 1) {
                message = distance_minutes + ' minutes ago';
            }
            else {
                message = distance_hours + ' hours ago';
            }
        }
        else {
            message = distance_dates + ' days ago';
        }

        return message;
    }
    private toHour(time) {
        return (time / (1000 * 60 * 60)).toFixed(0);
    }

    private toDate(time) {
        return (time / (1000 * 60 * 60 * 24)).toFixed(0);
    }

    private toMinutes(time) {
        return (time / (1000 * 60)).toFixed(0);
    }
    // ---------------------------------------------------- //

    // handle error
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
