import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Shelf from "./Shelf.tsx";

describe("Search component", () => {
  const initialState = {
    books: {
      uncategorizedBooks: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      searchUncategorizedBooks: [],
    },
  };

  const read = [{}];

  const mockStore = configureStore();
  let store;
  

  test("check that books is loaded", async () => {

    store = mockStore(initialState);
    
    render(
      <Provider store={store}>
        <Shelf shelfCategory="Read" books={read}/>
      </Provider>
    );

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  });
});
