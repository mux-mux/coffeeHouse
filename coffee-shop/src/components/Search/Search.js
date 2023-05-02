import './Search.css';

function Search({ query }) {
  return (
    <section className="search">
      <span className="search-filter-label search__label">Lookiing for</span>
      <input
        type="text"
        className="search__input"
        placeholder="start typing here..."
        onChange={(e) => query(e.currentTarget.value)}
      />
    </section>
  );
}

export default Search;
