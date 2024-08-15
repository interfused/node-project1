import { useSearchParamsContext } from "../useContext/context";

type SearchFormProps = {
  searchInputText: string;
};
function logIt(str: string): void {
  console.log(`button search for ${str}`);
}
export default function SearchForm() {
  const sParams = useSearchParamsContext();

  return (
    <>
      <div>
        <h1>Search for things</h1>
        <p>This is the search form</p>
        <input name="searchImageText" placeholder={sParams.searchString} />
        <button
          onClick={() => {
            logIt("asdf");
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
