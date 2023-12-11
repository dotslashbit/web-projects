import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Noun from "./components/Noun";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";
import Verb from "./components/Verb";

export default function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }

  async function getSearchResult(searchWord) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    );
    const data = await response.json();
    console.log(data);
    setSearchResult(data[0]);
    // return data;
  }

  return (
    <div className="mx-96 my-10">
      <Navbar />
      <SearchBar
        onChange={(e) => handleSearchWordChange(e)}
        searchWord={searchWord}
        getSearchResult={getSearchResult}
      />
      {searchResult !== null && (
        <>
          <SearchWord searchResult={searchResult} />
          <Noun searchResult={searchResult} />
          <Verb />
          <Footer />
        </>
      )}
    </div>
  );
}
