function Definition({ definition }) {
  console.log("def", definition);
  return <li className="my-4">{definition.definition}</li>;
}

export default Definition;
