function SearchWord({ searchResult }) {
  // console.log(searchResult.word);
  return (
    <div className="word flex justify-between my-10">
      <div className="flex flex-col justify-between items-start gap-4">
        <h2 className="text-6xl font-bold">{searchResult.word}</h2>
        <p className="text-2xl font-light text-violet">
          {searchResult.phonetic}
        </p>
      </div>
      <img src="assets/images/icon-play.svg" />
    </div>
  );
}

export default SearchWord;
