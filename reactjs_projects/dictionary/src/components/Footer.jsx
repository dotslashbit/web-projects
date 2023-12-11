import Source from "./Source";

function Footer({ sources }) {
  return (
    <footer className="flex justify-start items-center gap-10 my-10">
      <p className="meaning text-white-darkest text-xl font-light my-5">
        Source
      </p>
      <ul className="meaning-list ml-10 items-center flex gap-x-10 flex-wrap list-none marker:text-violet">
        {sources.map((source, i) => (
          <Source source={source} key={i} />
        ))}
        {/* <li className="my-4">To type on a computer keyboard.</li>
        <p>"Keyboarding is the part of this job I hate the most."</p> */}
      </ul>
      {/* <p>Source</p>
      <a href="https://en.wiktionary.org/wiki/keyboard">
        https://en.wiktionary.org/wiki/keyboard
      </a> */}
    </footer>
  );
}

export default Footer;
