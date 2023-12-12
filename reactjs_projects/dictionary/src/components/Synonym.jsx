function Synonym({ synonym, darkMode }) {
  console.log("synonym", synonym);
  return <li className={`${darkMode ? "text-violet" : ""}`}>{synonym}</li>;
}

export default Synonym;
