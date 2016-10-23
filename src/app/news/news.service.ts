import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Article} from './news-article';

@Injectable()
export class NewsService {
  constructor(private http: Http) {
  }

  // get News Methods
  getByCategory(category: string): Promise<Article[]> {
    return this.http.get("http://localhost:3000/" + category)
      .toPromise()
      .then(response => response.json() as Article[])
      .catch(this.handleError);
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

  // handle error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
