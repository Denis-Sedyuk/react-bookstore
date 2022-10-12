import { useEffect } from "react";
import { useDebounce, useInput } from "hooks";
import { useAppDispatch, getDebounceSearchValue } from "store";
import { SearchArea } from "./styles";

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const { value, onChange } = useInput();
  const debounceSearchValue = useDebounce(value);

  useEffect(() => {
    dispatch(getDebounceSearchValue(debounceSearchValue));
  }, [debounceSearchValue, dispatch]);

  return <SearchArea placeholder="Search..." onChange={onChange} value={value} />;
};
