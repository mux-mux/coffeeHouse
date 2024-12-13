import React from 'react';

import Promo from '../components/Promo/Promo';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Heading from '../components/Heading/Heading';
import Paragraph from '../components/Paragraph/Paragraph';
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
          <Paragraph className="paragraph ph10 mt4">
            Welcome to our coffee beans webstore, your ultimate destination for
            premium coffee beans that elevate your daily brew. We specialize in
            delivering the finest coffee selections to satisfy every coffee
            lover's palate. From the rich and full-bodied{' '}
            <strong>Solimo Coffee Beans (1kg)</strong> to the bold and aromatic{' '}
            <strong>Presto Coffee Beans (1kg)</strong>, we cater to those who
            crave quality in every cup. Our offerings are carefully curated to
            ensure freshness, flavor, and satisfaction, making your coffee
            experience truly exceptional.
            <span className="pBreak"></span>
            At our store, we also feature the exquisite{' '}
            <strong>AROMISTICO Coffee Beans (1kg)</strong>, crafted to transport
            you to the heart of Italian coffee culture. With every bag, we
            promise not just coffee but an invitation to savor the artistry and
            tradition of exceptional roasting. Whether you’re stocking up for
            your home brewing station or searching for the perfect gift for a
            coffee enthusiast, we’ve got you covered. Discover the joy of
            brewing premium coffee with us and make every sip a moment of
            delight!
          </Paragraph>
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
