import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { bookAPI } from "../../services/index";
import { IBookDetails } from "../../types/types";

interface DetailsState {
  bookDetails: IBookDetails;
  isLoading: boolean;
  error: null | string;
}

const initialState: DetailsState = {
  isLoading: false,
  error: null,
  bookDetails: {
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {},
  },
};
export const fetchBookDetails = createAsyncThunk<IBookDetails, string, { rejectValue: string }>(
  "bookDetails/fetchBookDetails",
  async (isbn13, { rejectWithValue }) => {
    try {
      return await bookAPI.getDetailsBook(isbn13);
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.bookDetails = payload;
    });
    builder.addCase(fetchBookDetails.rejected, (state) => {
      state.isLoading = false;
      state.error = null;
    });
  },
});

export default bookDetailsSlice.reducer;
