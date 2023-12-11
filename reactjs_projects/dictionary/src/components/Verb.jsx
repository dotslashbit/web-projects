import VerbDefinition from "./VerbDefinition";

function Verb({ searchResult }) {
  const verbs = searchResult.meanings.filter(
    (meaning) => meaning.partOfSpeech === "verb"
  );
  console.log(verbs);
  return (
    <section className="verb">
      <p className="italic font-bold text-xl mt-10">verb</p>
      <p className="meaning text-white-darkest text-xl font-light my-5">
        Meaning
      </p>
      <ul className="meaning-list ml-10 list-disc marker:text-violet">
        {verbs[0].definitions.map((definition, i) => (
          <VerbDefinition verbDefinition={definition} key={i} />
        ))}
        {/* <li className="my-4">To type on a computer keyboard.</li>
        <p>"Keyboarding is the part of this job I hate the most."</p> */}
      </ul>
    </section>
  );
}

export default Verb;
