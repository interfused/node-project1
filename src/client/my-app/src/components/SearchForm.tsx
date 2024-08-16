import { EventHandler, FormEventHandler, useState } from "react";
import { useSearchParamsContext } from "../useContext/context";
import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";

type SearchFormProps = {
  /*searchInputText: string;*/
  addSearchItem: (str: string) => void;
};

export default function SearchForm() {
  const sParams = useSearchParamsContext();
  const [answer, setAnswer] = useState("");
  const [listOfSearchTerms, setListOfSearchTerms] = useState<
    { term: string }[]
  >([]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    //let newAnswer = [...answer];
    console.log(`handleSubmit for answer: `);
    console.dir(answer);
    console.log("ListOfSearchTerms");

    let newListOfSearchTerms = [...listOfSearchTerms, { term: answer }];
    console.dir(newListOfSearchTerms);
    setListOfSearchTerms(newListOfSearchTerms);

    const unsplashCreds = {
      appId: 644060,
      key: "pYKxzgCrJ2T_uJs4EKLGCpSnS9-jReldO5DSSLrx3gs",
      secret: "-0Rn-WNewAb3r0CECpG__VwigmuHQtK_uOXJxZP7_ps",
    };
    console.log(`UNSPLASH----`);
    const unsplash = createApi({ accessKey: unsplashCreds.key });
    /*unsplash.photos.get({ photoId: "foo" }).then((result) => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0]);
      } else {
        // handle success here
        const photo = result.response;
        console.log(photo);
      }
    });
    */
    let results = await unsplash.search.getPhotos({
      query: answer,
      page: 1,
      perPage: 5,
      color: "green",
      orientation: "landscape",
    });
    console.log(`unsplash results`);
    console.dir(results);
  }

  function handleTextareaChange(e: any) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Search for things</h1>
        <p>This is the search form</p>
        <input
          name="searchImageText"
          placeholder={sParams.searchString}
          onChange={handleTextareaChange}
        />
        <button>Search</button>
      </form>
    </>
  );
}
