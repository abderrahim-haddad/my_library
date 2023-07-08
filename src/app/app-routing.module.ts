import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { AuthGuard } from './services/auth-guard.service';
import { SingleBookComponent } from './book-list/single-book/single-book.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', canActivate: [AuthGuard], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuard], component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuard], component: SingleBookComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }