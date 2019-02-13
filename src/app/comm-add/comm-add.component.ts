import { Component, OnInit } from '@angular/core';

import {Comment, CommentsService} from '../share/index';

import {ActivatedRoute, Params} from '@angular/router';

import {FormGroup, FormBuilder, Validators} from '@angular/forms';


import {Subject} from 'rxjs';


@Component({
  selector: 'app-comm-add',
  templateUrl: './comm-add.component.html',
  styleUrls: ['./comm-add.component.css']
})
export class CommAddComponent implements OnInit {

  static onBtn = new Subject();

  obj: Comment = new Comment(null, null, null );

  commForm: FormGroup;

  formErrors = {
    'userName': '',
    'commText': ''
  };
  validationMessages = {
    'userName': {
      'required': 'Обязательное поле.',

    },
    'commText': {
      'required': 'Обязательное поле.',
      'minlength': 'Слишком Коротко'
    }
  };


  constructor(private service: CommentsService, public fb: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    this.buildForm();

    // this.getCommentsFromRoute();



  }



  getDate() {

    return new Date();
  }

  private buildForm() {

    this.commForm = this.fb.group({
      'userName': [this.obj.userName, [Validators.required]],
      'commText': [this.obj.commText, [Validators.required, Validators.minLength(10)]]

    });

    this.commForm.valueChanges.subscribe(data => this.onValueChange(data));

    this.onValueChange();




  }

  public onSubmit(commForm: FormGroup) {

    this.obj.userName = commForm.value.userName;
    this.obj.commText = commForm.value.commText;
    this.obj.Date = this.getDate();
    this.service.giveComponent(this.obj).subscribe(
      () => CommAddComponent.onBtn.next()
    );


    this.obj.userName = '';
    this.obj.commText = '';

    console.log(this.obj);

  }

  onValueChange(data?: any) {
    if (!this.commForm) { return; }
    const form = this.commForm;

    console.log(form);
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      // form.get - получение элемента управления
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  // private getCommentsFromRoute() {
  //   this.activatedRoute.params.forEach((params: Params) => {
  //     let id = params["id"];
  //
  //     if (id) {
  //       this.service.getComment(id).subscribe(
  //         component => {
  //           this.obj = component;
  //           this.commForm.patchValue(this.obj);
  //         }
  //
  //       );
  //     }
  //     else {
  //       this.obj = new Comment( null, null, null);
  //
  //       this.commForm.patchValue(this.obj);
  //     }
  //   });
  // }



}
