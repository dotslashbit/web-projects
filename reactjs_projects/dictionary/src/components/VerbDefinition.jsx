function VerbDefinition({ verbDefinition }) {
  return (
    <div className="flex flex-col">
      <li>{verbDefinition.definition}</li>
      <p className="italic text-white-darkest text-lg font-light mt-2">
        {verbDefinition.example}
      </p>
    </div>
  );
}

export default VerbDefinition;
