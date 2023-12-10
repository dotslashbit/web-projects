import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchWord from "./components/SearchWord";

export default function App() {
  return (
    <div className="mx-96 my-10">
      <Navbar />
      <SearchBar />
      <SearchWord />
      <main>
        <section className="noun">
          <p className="italic font-bold text-xl">noun</p>
          <p className="meaning text-white-darkest text-xl font-light my-5">
            Meaning
          </p>
          <ul className="meaning-list ml-10 list-disc marker:text-violet">
            <li className="my-4">
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li className="my-4">
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li className="my-4">
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
          <div className="synonyms flex justify-start gap-10">
            <p>Synonyms</p>
            <p className="text-violet">Electronic Keyboard</p>
          </div>
        </section>
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
