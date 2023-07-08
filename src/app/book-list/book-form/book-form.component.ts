import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  form !: FormGroup;
  fileIsUploading = false;
  fileUploaded = false;
  fileUrl !: string;
  constructor(
    private router: Router,
    private booksServie: BooksService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: '',
    })
  }

  onSaveBook() {
    const title = this.form.get('title')?.value;
    const author = this.form.get('author')?.value;
    const synopsis = this.form.get('synopsis')?.value;
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    if (this.fileUrl && this.fileUrl !== '') {
      newBook.photo = this.fileUrl;
    }
    this.booksServie.createNewBook(newBook);
    this.router.navigate(['/books']);
  }

  onuploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksServie.uplaodFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileUploaded = true;
        this.fileIsUploading = false;
      }
    )
  }
  detectFile(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      const file = inputElement.files[0];
      this.onuploadFile(file);
    }
  }

}
