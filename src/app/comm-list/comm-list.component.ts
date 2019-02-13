import { Component, OnInit } from '@angular/core';

import {Comment, CommentsService} from '../share/index';

import {CommAddComponent} from '../comm-add/comm-add.component';

import {map} from 'rxjs/operators';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {subscriptionLogsToBeFn} from 'rxjs/internal/testing/TestScheduler';


@Component({
  selector: 'app-comm-list',
  templateUrl: './comm-list.component.html',
  styleUrls: ['./comm-list.component.css']
})
export class CommListComponent implements OnInit {

  comments: Comment[];


  constructor(private service: CommentsService) { }

  ngOnInit() {

    console.log(this.service.getComments());

    this.getComments();

    CommAddComponent.onBtn.subscribe(() => {
      this.getComments();
    });


  }

  getComments() {
    this.service.getComments().pipe(

      map(comments => this.comments = comments.sort((a, b) => {
                const dateA = new Date(a.Date).getTime(),
                    dateB = new Date(b.Date).getTime();

                return dateB - dateA;
      }))).subscribe();
  }

}
