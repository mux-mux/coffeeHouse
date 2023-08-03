import { Component } from 'react';

import Header from '../components/Header/Header';
import SectionText from '../components/SectionText/SectionText';
import Heading from '../components/Heading/Heading';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Search from '../components/Search/Search';
import Filter from '../components/Filter/Filter';
import ProductCards from '../components/ProductCards/ProductCards';

class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props, filter: 'All', term: '' };
  }

  setSearch = (query) => {
    this.setState({
      term: query,
    });
  };

  setFilter = (country) => {
    this.setState({
      filter: country,
    });
  };

  showSearch = (items, query) => {
    if (query.length === 0) {
      return items;
    } else {
      return items.filter((item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    }
  };

  showFilter = (items, filter) => {
    if (filter === 'All') {
      return items;
    } else {
      return items.filter((item) => item.country === filter);
    }
  };

  render() {
    const { items, filter, term } = this.state;
    const visibleData = this.showFilter(this.showSearch(items, term), filter);
    return (
      <>
        <section className="promo promo-ourcoffee">
          <Header />
          <div className="container">
            <div className="section promo__content">
              <h1 className="promo__header">Our Coffee</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="about-components">
              <div className="about-components__img-wrapper">
                <img
                  src="./resources/sections/Section_About-beans.jpg"
                  alt="woman with cup"
                  className=""
                />
              </div>
              <div className="about-components__content">
                <Heading text="beans" />
                <SectionIcon />
                <SectionText text="beans" />
              </div>
            </div>
          </div>
        </section>
        <div className="section__divider"></div>

        <div className="container">
          <div className="search-filter__wrapper">
            <Search query={this.setSearch} />
            <Filter filter={this.setFilter} name={filter} />
          </div>
        </div>

        <section className="section products-page">
          <div className="container">
            <ProductCards items={visibleData} />
          </div>
        </section>
      </>
    );
  }
}

export default OurCoffee;
