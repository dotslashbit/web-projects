function SearchBar() {
  return (
    <form className="my-10 border-none rounded-xl flex justify-between py-3 px-6 bg-white-dark">
      <input
        className="w-full border-none focus:ring-0 bg-white-dark text-black-darkest"
        placeholder="Learn Something new..."
        type="text"
      />
      <button>
        <img src="/assets/images/icon-search.svg" />
      </button>
    </form>
  );
}

export default SearchBar;
