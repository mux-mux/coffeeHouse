import React from 'react';

import Promo from '../components/Promo/Promo';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Heading from '../components/Heading/Heading';
import SectionText from '../components/SectionText/SectionText';
import ProductCards from '../components/ProductCards/ProductCards';

import '../App.scss';

function Home({ threeBest }) {
  return (
    <>
      <Promo />

      <section className="section about_us">
        <div className="container">
          <Heading as="h3">About Us</Heading>
          <SectionIcon color="black" />
          <SectionText text="about" />
        </div>
      </section>

      <section className="section products__our-best">
        <div className="container">
          <Heading as="h3">Our best</Heading>
          <ProductCards items={threeBest} />
        </div>
      </section>
    </>
  );
}

export default Home;
