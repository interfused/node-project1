import { createContext, useContext } from "react";
import { SearchParams } from "./SearchParams";

export const SearchContext = createContext<SearchParams | undefined>(undefined);

// in case provider was not set appropriately
export function useSearchParamsContext() {
  const sParams = useContext(SearchContext);
  if (sParams === undefined) {
    throw new Error("useSearchParamsContext must be used with a SearchContext");
  }
  return sParams;
}
