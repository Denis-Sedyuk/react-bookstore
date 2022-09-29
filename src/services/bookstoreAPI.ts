import axios from "axios";
import { IBookDetails, IBookItem } from "../types/types";

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

  public async getSearchBook() {
    const { data } = await this.API.get(`${Endpoint.SEARCH}`);
    return data;
  }
}

export const bookAPI = new BookAPI();
