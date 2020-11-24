import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { RequestUrls } from "../../constants/RequestUrls";
import {AuthorModel} from "../../models/book/author.model";

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  createAuthor(author: any) {
    return this.http.post(RequestUrls.BOOK.AUTHOR.CREATE, author);
  }

  updateAuthor(author: any) {
    return this.http.put(RequestUrls.BOOK.AUTHOR.UPDATE, author);
  }

  getAuthors() {
    return this.http.get<AuthorModel>(RequestUrls.BOOK.AUTHOR.GET_LIST);
  }

  getAuthorById(id: string) {
    return this.http.get<AuthorModel>(RequestUrls.BOOK.AUTHOR.DETAILS + `/${id}`);
  }
}