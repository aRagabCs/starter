import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as search from "./Search.tsx";

describe("Book component", () => {
  const initialState = {
    books: {
      uncategorizedBooks: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      searchUncategorizedBooks: [],
    },
  };

  const mockStore = configureStore();
  let store;
  const book = {
    imageLinks: {
      thumbnail: '',
    },
  };

  test("select values", () => {

    store = mockStore(initialState);
    
    const addBooksSpy = jest.spyOn(search, 'addBooks');
    
    
      

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(addBooksSpy).toHaveBeenCalled();
  });
});
