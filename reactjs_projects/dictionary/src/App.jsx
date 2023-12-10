import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Noun from "./components/Noun";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";
import Verb from "./components/Verb";

export default function App() {
  return (
    <div className="mx-96 my-10">
      <Navbar />
      <SearchBar />
      <SearchWord />
      <Noun />
      <Verb />
      <Footer />
    </div>
  );
}
