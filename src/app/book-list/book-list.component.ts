import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: Book[] = [];
  boosSubscription!: Subscription;
  constructor(
    private router: Router,
    private booksService: BooksService,
  ) { }

  

}
