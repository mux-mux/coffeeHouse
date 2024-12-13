import { useState } from 'react';

import Header from '../components/Header/Header';
import SectionText from '../components/SectionText/SectionText';
import Heading from '../components/Heading/Heading';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Search from '../components/Search/Search';
import Filter from '../components/Filter/Filter';
import ProductCards from '../components/ProductCards/ProductCards';

const OurCoffee = ({ products }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const searchQuery = (query) => setSearch(query);
  const filterCountry = (country) => setFilter(country);

  const showSearch = (data, query) => {
    if (query.length === 0) {
      return data;
    } else {
      return data.filter(
        (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
    }
  };

  const showFilter = (data, filter) => {
    if (filter === 'All') {
      return data;
    } else {
      return data.filter((item) => item.country === filter);
    }
  };

  const visibleData = showFilter(showSearch([...products], search), filter);
  return (
    <>
      <section className="promo promo-ourcoffee">
        <Header color="white" />
        <div className="container">
          <div className="section promo__content">
            <Heading as="h2" className="promo__header">
              Our Coffee
            </Heading>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="about-components">
            <picture className="about-components__img-wrapper">
              <source
                type="image/webp"
                srcSet="./resources/sections/webp/Section_About-beans.webp"
              />
              <img
                src="./resources/sections/Section_About-beans.jpg"
                alt="woman with cup"
              />
            </picture>
            <div className="about-components__content">
              <Heading as="h3">About our beans</Heading>
              <SectionIcon color="black" />
              <SectionText text="beans" />
            </div>
          </div>
        </div>
      </section>
      <div className="section__divider"></div>

      <div className="container">
        <div className="search-filter__wrapper">
          <Search query={searchQuery} />
          <Filter filter={filterCountry} name={filter} />
        </div>
      </div>

      <section className="section products-page">
        <div className="container">
          <ProductCards items={visibleData} />
        </div>
      </section>
    </>
  );
};

export default OurCoffee;
