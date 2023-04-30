import './Filter.css';

function Filter({ filter }) {
  const countries = ['Brazil', 'Kenya', 'Columbia'];
  const filterBtn = countries.map((item, index) => {
    return (
      <button
        className="filter__option filter__option_1"
        data-country={item}
        key={index}
        onClick={(e) => filter(e.currentTarget.getAttribute('data-country'))}
      >
        {item}
      </button>
    );
  });
  return (
    <section className="filter">
      <span className="search-filter-label filter__label">Or filter</span>
      <div className="filter__options">
        {filterBtn}
        {/* <button className="filter__option filter__option_1" data-county="brazil">
          Brazil
        </button>
        <button className="filter__option filter__option_2" data-county="kenya">
          Kenya
        </button>
        <button className="filter__option filter__option_3" data-county="columbia">
          Columbia
        </button> */}
      </div>
    </section>
  );
}

export default Filter;
