import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthorFormComponent} from '../author-form/author-form.component';
import {AuthorService} from '../../../../../shared/services/biblioteka/author.service';
import {AuthorModel} from '../../../../../shared/models/book/author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: AuthorModel[] = [];
  pageNumber = 0;
  loading = false;

  @ViewChild('cardList') private cardListElement: ElementRef;

  constructor(private dialog: MatDialog,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  private getAuthors() {
    this.loading = true;

    this.authorService.getAuthors(this.pageNumber, 30).subscribe(
      result => {
        this.loading = false;
        this.authors = this.authors.concat(...result.content);
      },
      error => {
        console.log(error);
      }
    );
  }

  createAuthor() {
    this.dialog.open(AuthorFormComponent);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;

    if (max - pos < 100 && !this.loading) {
      this.pageNumber++;
      this.getAuthors();
    }
  }

}
