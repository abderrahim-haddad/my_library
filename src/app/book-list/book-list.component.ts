import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  booksSubscription!: Subscription;
  constructor(
    private router: Router,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (value) => {
        this.books = value;
      }
    );
    this.booksService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/books', 'new'])
  }

  onRemoveBook(book: Book) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id])
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe;
  }
}
