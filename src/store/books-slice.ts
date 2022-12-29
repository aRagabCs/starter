import { createSlice } from '@reduxjs/toolkit';
import { book } from '../components/Book/Book.interface';
import { storeInitState } from '../interfaces/general-interfaces';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        uncategorizedBooks: [],
        currentlyReading: [],
        wantToRead: [],
        read: [],
        searchUncategorizedBooks: [],
    } as storeInitState,
    reducers: {
        setMainLibraryReducer(state, action) {
            state.uncategorizedBooks = action.payload.uncategorizedBooks;
            state.currentlyReading = action.payload.currentlyReading;
            state.wantToRead = action.payload.wantToRead;
            state.read = action.payload.read;
        },
        setSearchReducer(state, action) {
            state.searchUncategorizedBooks = action.payload.searchUncategorizedBooks;
            state.currentlyReading = action.payload.currentlyReading;
            state.wantToRead = action.payload.wantToRead;
            state.read = action.payload.read;
        },

        updateShelfReducer(state, action){
            const shelf: 'currentlyReading' | 'wantToRead' | 'read' = action.payload.shelf;
            let updatedBook: book = action.payload.updatedBook;
            updatedBook = {...updatedBook, shelf: shelf };
            state[shelf].push(updatedBook);
            state.uncategorizedBooks.push(updatedBook);
        },

        removeFromShelfReducer(state, action){
            const updatedBook: book = action.payload.updatedBook;
            const originalShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'searchUncategorizedBooks' | string = updatedBook.shelf ? updatedBook.shelf : 'searchUncategorizedBooks';

            if (originalShelf === 'currentlyReading' ||
                originalShelf === 'wantToRead' || 
                originalShelf === 'read' || 
                originalShelf === 'searchUncategorizedBooks') {
                const bookIndex = state[originalShelf].findIndex((book)=> book.id === updatedBook.id);
                state[originalShelf].splice(bookIndex, 1);
            }
        }
    }
});

export const booksActions = booksSlice.actions;
export default booksSlice;