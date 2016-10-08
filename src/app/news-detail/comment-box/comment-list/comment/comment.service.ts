import {Injectable} from "@angular/core";
import {Response, Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

export class Comment {
  constructor(public id: string, public author: string, public content: string, public created_at: Date) {
  }
}

var comments: Comment[] = [
  new Comment('1', 'Eugene', 'Lorem ipsum dolor sit ng elit. Duis porttitor ante vitae dapibus', new Date('Jun 15, 2015, 9:43:11 PM')),
  new Comment('2', 'Alex', 'Quisque conorbi metus ipsum, ultrices eget leo ', new Date('Jun 15, 2015, 9:43:11 PM')),
  new Comment('3', 'James', 'QuisquMorbi metus ipsum, ultrices eg', new Date('Jun 15, 2015, 9:43:11 PM')),
  new Comment('4', 'Hassle', 'Quisque consequat non enim effic', new Date('Jun 15, 2015, 9:43:11 PM'))
];

@Injectable()
export class CommentService {
  constructor(private  http: Http) {

  }

  getComment(): Promise<Comment[]> {
    return Promise.resolve(comments);
  }

  addComment(comment: Comment) {
    Promise.resolve(comments).then((comments: Comment[]) => comments.push(comment))
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}
