export interface IBook {
  books: any;
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface IBookItem {
  total: string;
  error: string;
  books: IBook[];
}

export interface IBookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: { [key: string]: string };
}
