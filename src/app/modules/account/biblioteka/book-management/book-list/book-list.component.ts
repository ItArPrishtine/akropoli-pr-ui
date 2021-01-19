import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookService} from '../../../../../shared/services/biblioteka/book.service';
import {BookModel} from '../../../../../shared/models/book/book.model';
import {BookFormComponent} from "../book-form/book-form.component";
import {BookBorrowDTO} from "../../../../../shared/models/dto/BookBorrowDTO.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookBorrowDTO[] = [];
  pageNumber = 0;
  loading = false;

  @ViewChild('cardList') private cardListElement: ElementRef;

  constructor(private dialog: MatDialog,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks() {
    this.loading = true;

    this.bookService.getBooks(this.pageNumber, 30).subscribe(
      result => {
        this.loading = false;
        this.books = this.books.concat(...result);
      },
      error => {
        console.log(error);
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;

    if (max - pos < 100 && !this.loading) {
      this.pageNumber++;
      this.getBooks();
    }
  }

  createBook() {
    this.dialog.open(BookFormComponent);
  }

}
