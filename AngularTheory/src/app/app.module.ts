import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ChapterComponent } from './book/chapter/chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
