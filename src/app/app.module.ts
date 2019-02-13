import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';

import { CommListComponent } from './comm-list/comm-list.component';
import { CommAddComponent } from './comm-add/comm-add.component';

import {CommentsService} from "./share/index";

@NgModule({
  declarations: [
    AppComponent,
    CommListComponent,
    CommAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
