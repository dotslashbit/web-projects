import NounDefinition from "./NounDefinition";
import Synonym from "./Synonym";

function Noun({ searchResult }) {
  const nouns = searchResult.meanings.filter(
    (meaning) => meaning.partOfSpeech === "noun"
  );
  console.log("nouns", nouns);
  console.log("syns", nouns[0].synonyms);
  return (
    <section className="noun">
      <p className="italic font-bold text-xl">noun</p>
      <p className="meaning text-white-darkest text-xl font-light my-5">
        Meaning
      </p>
      <ul className="meaning-list ml-10 list-disc marker:text-violet">
        {nouns[0].definitions.map((definition, i) => (
          <NounDefinition nounDefinition={definition} key={i} />
        ))}
        {/* <li className="my-4">
          (etc.) A set of keys used to operate a typewriter, computer etc.
        </li>
        <li className="my-4">
          A component of many instruments including the piano, organ, and
          harpsichord consisting of usually black and white keys that cause
          different tones to be produced when struck.
        </li>
        <li className="my-4">
          A device with keys of a musical keyboard, used to control electronic
          sound-producing devices which may be built into or separate from the
          keyboard device.
        </li> */}
      </ul>
      <div className="flex justify-start items-center gap-10">
        <p className="synonyms text-white-darkest text-xl font-light my-5">
          Synonyms
        </p>
        <ul className="synonyms flex justify-start gap-10">
          {nouns[0].synonyms.map((synonym, i) => (
            <Synonym synonym={synonym} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Noun;
