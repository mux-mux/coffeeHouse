import './Search.scss';

function Search({ query }) {
  return (
    <section className="search">
      <label htmlFor="search" className="search-filter-label search__label">
        Lookiing for
      </label>
      <input
        type="text"
        id="search"
        className="search__input"
        placeholder="find your coffee..."
        onChange={(e) => query(e.currentTarget.value)}
      />
    </section>
  );
}

export default Search;
