import { book } from '../components/Book/Book.interface';

  export interface categorizedBooks {
    currentlyReading: book[];
    wantToRead: book[];
    read: book[];
    unCategorized?: book[]; 
  };

  export interface uncategorizedBooks extends Array<book> {};

  export interface storeInitState {
      uncategorizedBooks: book[],
      currentlyReading: book[],
      wantToRead: book[],
      read: book[],
      searchUncategorizedBooks: book[],
      }

  export interface storeBooks {
    books: {
      uncategorizedBooks: uncategorizedBooks,
      currentlyReading: book[],
      wantToRead: book[],
      read: book[],
      searchUncategorizedBooks: book[],
      searchcurrentlyReading: book[],
      searchWantToRead: book[],
      searchRead: book[],
    }
  }

