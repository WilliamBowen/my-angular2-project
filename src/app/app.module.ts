import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
