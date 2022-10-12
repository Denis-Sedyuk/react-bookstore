import axios from "axios";
import { IBookDetails, IBookItem, IResponseSearchBook, SearchValue } from "../types/types";

enum Endpoint {
  NEW = "new",
  BOOK = "books/",
  SEARCH = "search/",
}

class BookAPI {
  private readonly BASE_URL = process.env.REACT_APP_BOOKSTORE_BASE_URL as string;

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBook() {
    const { data } = await this.API.get<IBookItem>(Endpoint.NEW);
    return data;
  }

  public async getDetailsBook(isbn13: string) {
    const { data } = await this.API.get<IBookDetails>(`${Endpoint.BOOK}${isbn13}`);
    return data;
  }

  public async getSearchBook({ query, page }: SearchValue) {
    const { data } = await this.API.get<IResponseSearchBook>(`${Endpoint.SEARCH}${query}/${page}`);
    return data;
  }
}

export const bookAPI = new BookAPI();
