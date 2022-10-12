import { RootState } from "../store";

export const getBooksSearch = (state: RootState) => state.persistedReducer.search;
