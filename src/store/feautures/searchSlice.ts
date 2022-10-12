import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IBook, IResponseSearchBook } from "../../types/types";
import { bookAPI } from "../../services/index";

// interface SearchBooksState {
//   searchBooks: IBook[];
//   isLoading: boolean;
//   error: null | string;
//   searchValue: string;
// }

// const initialState: SearchBooksState = {
//   searchBooks: [],
//   isLoading: false,
//   error: null,
//   searchValue: "",
// };

// export const fetchSearchBooks = createAsyncThunk<
//   IResponseSearchBook,
//   { query: string; page: number },
//   { rejectValue: string }
// >("search/fetchSearchBooks", async ({ query, page }, { rejectWithValue }) => {
//   try {
//     return await bookAPI.getSearchBook(query, page);
//   } catch (error) {
//     const axiosError = error as AxiosError;
//     return rejectWithValue(axiosError.message);
//   }
// });

// const searchSlice = createSlice({
//   name: "search",
//   initialState,
//   reducers: {
//     getSearchValue(state, { payload }: PayloadAction<string>) {
//       state.searchValue = payload;
//     },

//     removeSearchValue(state) {
//       state.searchValue = "";
//     },
//   },
//   extraReducers(builder) {
//     builder.addCase(fetchSearchBooks.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       if (payload.books) {
//         state.searchBooks = payload.books;
//       }
//     });
//     builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
//       if (payload) {
//         state.isLoading = false;
//         state.error = payload;
//       }
//     });
//   },
// });

// export const { getSearchValue, removeSearchValue } = searchSlice.actions;

// export default searchSlice.reducer;

interface SearchBooksState {
  booksBySearch: IBook[];
  isLoading: boolean;
  error: null | string;
  debounceSearchValue: string;
  total: string;
}

const initialState: SearchBooksState = {
  booksBySearch: [],
  isLoading: false,
  error: null,
  debounceSearchValue: "",
  total: "",
};

const fetchBooksBySearch = createAsyncThunk<
  IResponseSearchBook,
  { query: string; page: number },
  { rejectValue: string }
>("search/fetchBooksBySearch", async ({ query, page }, { rejectWithValue }) => {
  try {
    return await bookAPI.getSearchBook({ query, page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getDebounceSearchValue(state, { payload }: PayloadAction<string>) {
      state.debounceSearchValue = payload;
    },

    resetDebounceSearchValue(state) {
      state.debounceSearchValue = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.books) {
        state.booksBySearch = payload.books;
        state.total = payload.total;
      }
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;

export { fetchBooksBySearch };

export const { getDebounceSearchValue, resetDebounceSearchValue } = searchSlice.actions;
