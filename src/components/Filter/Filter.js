import './Filter.scss';

function Filter({ filter, name }) {
  const countries = ['All', 'Brazil', 'Kenya', 'Columbia'];

  const filterBtn = countries.map((item, index) => {
    const active = name === item;

    return (
      <button
        className={`filter__option${active ? ' filter_active' : ''}`}
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
      <div className="filter__options">{filterBtn}</div>
    </section>
  );
}

export default Filter;
