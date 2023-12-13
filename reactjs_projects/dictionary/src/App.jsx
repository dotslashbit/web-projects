import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Noun from "./components/Noun";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";
import Verb from "./components/Verb";
import ErrorSearchWord from "./components/ErrorSearchWord";

//TODO: Add dark mode styles to the website
// TODO: Handle Data fetching error
// TODO: Add loading state
// TODO: Handle invalid input or empty input

export default function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);

  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }

  function handleSelectedFontChange(event) {
    setSelectedFont(event.target.value);
  }

  function handleDarkModeChange() {
    setDarkMode(!darkMode);
  }

  async function getSearchResult(searchWord) {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    );
    if (!response.ok) {
      setError("Error");
      console.log(error);
    } else {
      const data = await response.json();
      console.log(data);
      setSearchResult(data[0]);
      setError(null);
    }

    // return data;
  }

  return (
    <div
      className={`px-96 py-10 ${
        darkMode ? "dark bg-black-darkest text-white-light" : ""
      }`}
      style={{ fontFamily: selectedFont }}
    >
      <Navbar
        selectedFont={selectedFont}
        onHandleSelectedFont={(e) => handleSelectedFontChange(e)}
        darkMode={darkMode}
        onHandleDarkMode={handleDarkModeChange}
      />
      <SearchBar
        onChange={(e) => handleSearchWordChange(e)}
        searchWord={searchWord}
        getSearchResult={getSearchResult}
      />
      {error !== null ? (
        <ErrorSearchWord />
      ) : (
        searchResult !== null && (
          <>
            <SearchWord searchResult={searchResult} />
            <Noun searchResult={searchResult} darkMode={darkMode} />
            <Verb searchResult={searchResult} />
            <Footer sources={searchResult.sourceUrls} />
          </>
        )
      )}
    </div>
  );
}
