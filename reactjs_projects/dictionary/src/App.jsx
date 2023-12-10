import Navbar from "./components/Navbar";
import Noun from "./components/Noun";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";

export default function App() {
  return (
    <div className="mx-96 my-10">
      <Navbar />
      <SearchBar />
      <SearchWord />
      <Noun />
      <main>
        <section className="verb">
          <p className="italic font-bold text-xl mt-10">verb</p>
          <p className="meaning text-white-darkest text-xl font-light my-5">
            Meaning
          </p>
          <ul className="meaning-list ml-10 list-disc marker:text-violet">
            <li className="my-4">To type on a computer keyboard.</li>
            <p>"Keyboarding is the part of this job I hate the most."</p>
          </ul>
        </section>
      </main>
      <footer className="flex justify-start gap-10 my-10">
        <p>Source</p>
        <a href="https://en.wiktionary.org/wiki/keyboard">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </footer>
    </div>
  );
}
