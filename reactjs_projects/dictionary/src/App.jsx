import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Noun from "./components/Noun";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";
import Verb from "./components/Verb";

export default function App() {
  const [searchWord, setSearchWord] = useState("");

  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="mx-96 my-10">
      <Navbar />
      <SearchBar
        onChange={(e) => handleSearchWordChange(e)}
        searchWord={searchWord}
      />
      <SearchWord />
      <Noun />
      <Verb />
      <Footer />
    </div>
  );
}
