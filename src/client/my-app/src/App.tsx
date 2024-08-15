import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { Sidebar } from "./components/Sidebar";
import { SearchContext } from "./useContext/context";
import { SearchParams } from "./useContext/SearchParams";

function App() {
  let [displaySection, setDisplaySection] = useState("Intro");
  let [searchText, setSearchText] = useState("first image");

  const [sParams, setSParams] = useState<SearchParams>({
    searchString: "my first search text",
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>
          Section to View: <b>{displaySection}</b>
        </p>
        <p>We are attempting to search for {searchText}</p>
        <Sidebar
          navigateItem={(displaySection: string) =>
            setDisplaySection(displaySection)
          }
        />
        <SearchContext.Provider value={sParams}>
          <SearchForm></SearchForm>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
