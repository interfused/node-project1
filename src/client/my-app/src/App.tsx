import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import { Sidebar } from "./components/Sidebar";
import { SearchContext } from "./useContext/context";
import { SearchParams } from "./useContext/SearchParams";
import HomeContent from "./components/home/homecontent";
import Header from "./components/Header";

function App() {
  let [displaySection, setDisplaySection] = useState("Intro");
  let [searchText, setSearchText] = useState("first image");

  const [sParams, setSParams] = useState<SearchParams>({
    searchString: "my first search text",
  });

  const something = useContext(SearchContext);

  return (
    <div className="App">
      <Header />
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
        {displaySection.toLowerCase() === "home" && <HomeContent></HomeContent>}

        <SearchContext.Provider value={sParams}>
          <SearchForm></SearchForm>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
