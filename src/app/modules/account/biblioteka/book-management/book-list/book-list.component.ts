import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookService} from '../../../../../shared/services/biblioteka/book.service';
import {BookModel} from '../../../../../shared/models/book/book.model';
import {BookFormComponent} from "../book-form/book-form.component";
import {BookBorrowDTO} from "../../../../../shared/models/dto/BookBorrowDTO.model";
import {AuthorService} from "../../../../../shared/services/biblioteka/author.service";
import {AuthorModel} from "../../../../../shared/models/book/author.model";
import {IMAGEURLS} from "../../../../../shared/constants/GeneralConstant";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookBorrowDTO[] = [];
  authors: AuthorModel[] = [];
  pageNumber = 0;
  loading = false;
  selectedAuthor: string;
  listView = false;
  bookBg = IMAGEURLS.BOOK_BACKGROUND;

  @ViewChild('cardList') private cardListElement: ElementRef;

  constructor(private dialog: MatDialog,
              private bookService: BookService,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors()
  }

  public getBooks(onScroll?: boolean, searchTitle?: string) {
    this.loading = true;

    this.bookService.getBooks(this.pageNumber, 32, searchTitle, this.selectedAuthor).subscribe(
      result => {
        this.loading = false;
        if (onScroll) {
          this.books = this.books.concat(...result);
          return;
        }
        this.books = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  private getAuthors() {
    this.loading = true;

    this.authorService.getAllAuthors().subscribe(
      result => {
        this.loading = false;
        this.authors = result;
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
      this.getBooks(true);
    }
  }

  createBook() {
    this.dialog.open(BookFormComponent);
  }

  authorSelected(event) {
    this.selectedAuthor = event.value;
    this.pageNumber = 0;
    this.getBooks();
  }

  toogleCheckbox() {
    this.listView = !this.listView;
  }

}
