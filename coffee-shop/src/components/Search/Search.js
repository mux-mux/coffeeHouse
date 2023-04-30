import './Search.css';

function Search() {
  return (
    <section className="search">
      <span className="search-filter-label search__label">Lookiing for</span>
      <input type="text" className="search__input" placeholder="start typing here..." />
    </section>
  );
}

export default Search;
