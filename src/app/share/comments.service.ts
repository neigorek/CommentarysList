import {Comment} from './Comment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


import { map, filter, scan } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = 'http://localhost:2403/comments';


  constructor(private http: HttpClient) { }



  public getComments(): Observable<Comment[]> {

    return this.http.get<Comment[]>(this.url);
  }

  public getComment(id: string): Observable<Comment> {

    return this.http.get<Comment>(this.url + '/' + id);


  }

  public giveComponent(comment: Comment) {

    return this.http.post(this.url, comment);


  }
  public updateComment(comment: Comment) {

    return this.http.put(this.url + '/' + comment.id, comment);
  }

  // private extractComments(response: Response) {
  //   let res = response.json();
  //   let comments: Comment[] = [];
  //   for (let i = 0; i < res.length; i++) {
  //     comments.push(new Comment(res[i].id, res[i].userName, res[i].commText, res[i].Date));
  //   }
  //   return comments;
  // }
  //
  // private extractComment(response: Response) {
  //   let res = response.json();
  //   let comment = new Comment(res.id, res.userName, res.commText, res.Date);
  //   return comment;
  // }
  //
  // private handleError(error: any, cought: Observable<any>): any {
  //   let message = "";
  //
  //   if (error instanceof Response) {
  //     let errorData = error.json().error || JSON.stringify(error.json());
  //     message = `${error.status} - ${error.statusText || ''} ${errorData}`
  //   } else {
  //     message = error.message ? error.message : error.toString();
  //   }
  //
  //   console.error(message);
  //
  //   return Observable.throw(message);
  // }

}
