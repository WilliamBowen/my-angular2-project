import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors.component';
import { AuthorService } from './author.service';
import { MessagesComponent } from './messages.component';
import { MessagesService } from './messages.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    MessagesComponent,
    AutoGrowDirective,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [CourseService, AuthorService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
