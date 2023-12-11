function NounDefinition({ nounDefinition }) {
  console.log("def", nounDefinition);
  return <li className="my-4">{nounDefinition.definition}</li>;
}

export default NounDefinition;
