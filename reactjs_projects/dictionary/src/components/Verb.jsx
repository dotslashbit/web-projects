function Verb() {
  return (
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
  );
}

export default Verb;
