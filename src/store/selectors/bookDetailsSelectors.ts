import { RootState } from "../store";

export const getBooksDetails = (state: RootState) => state.persistedReducer.bookDetails;
