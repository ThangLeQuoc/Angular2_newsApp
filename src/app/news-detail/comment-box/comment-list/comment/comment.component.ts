import { Component, OnInit } from '@angular/core';
import {CommentService, Comment} from "./comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['comment.component.scss'],
  providers: [CommentService]
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  comments: Comment[];

  ngOnInit() {
    this.getComment();
  }

  getComment(){
    this.commentService.getComment().then(comments => {this.comments = comments});
    // this.commentService.getInMemory().subscribe(comments => {this.comments = comments},
    //   error =>  console.log(error));
  }
}
