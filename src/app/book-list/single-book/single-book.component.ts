import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
  ) { }
  book !: Book;
  ngOnInit(): void {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSinglebook(+id).then(
      (value) => {
        this.book = value;
      }
    );
  }
  onBack() {
    this.router.navigate(['/books']);
  }
}