import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/books/sub-components/book/book.component';
import { BooksService } from './pages/books/books.service';
import { BooksModule } from './pages/books/books.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, BooksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
