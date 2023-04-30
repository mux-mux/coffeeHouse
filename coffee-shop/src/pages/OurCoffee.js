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
    this.state = { ...props, filter: 'Brazil' };
  }

  filterItems = (country) => {
    this.setState(({ items }) => {
      return {
        filter: items.filter((item) => item.country === country),
        // filter: country,
      };
    });
  };

  render() {
    const { items } = this.state;
    console.log(this.state);
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
                  src="/resources/sections/Section_About-beans.jpg"
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
            <Search />
            <Filter filter={this.filterItems} />
          </div>
        </div>

        <section className="section products-page">
          <div className="container">
            <ProductCards items={items} />
          </div>
        </section>
      </>
    );
  }
}

export default OurCoffee;
