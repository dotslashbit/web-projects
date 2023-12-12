import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Noun from "./components/Noun";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";
import Verb from "./components/Verb";

//TODO: Add dark mode styles to the website
// TODO: Handle Data fetching error
// TODO: Add loading state
// TODO: Handle invalid input or empty input

export default function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const [darkMode, setDarkMode] = useState(false);

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
    const data = await response.json();
    console.log(data);
    setSearchResult(data[0]);
    // return data;
  }

  return (
    <div
      className={`${darkMode ? "dark" : ""} ${
        darkMode ? "bg-black-darkest" : ""
      } ${darkMode ? "text-white-light" : ""}`}
    >
      <div className={`mx-96 my-10 `} style={{ fontFamily: selectedFont }}>
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
          darkMode={darkMode}
        />
        {searchResult !== null && (
          <>
            <SearchWord searchResult={searchResult} />
            <Noun searchResult={searchResult} darkMode={darkMode} />
            <Verb searchResult={searchResult} />
            <Footer sources={searchResult.sourceUrls} />
          </>
        )}
      </div>
    </div>
  );
}
