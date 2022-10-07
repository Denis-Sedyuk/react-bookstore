import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookAPI } from "../../services/index";
import { IBook, IBookItem } from "../../types/types";

interface BookState {
  books: IBook[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BookState = {
  books: [],
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk<IBookItem, undefined, { rejectValue: string }>(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      return await bookAPI.getNewBook();
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default bookSlice.reducer;

export { fetchBooks };
