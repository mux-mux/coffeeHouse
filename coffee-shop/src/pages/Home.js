import React from 'react';

// import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Heading from '../components/Heading/Heading';
import SectionText from '../components/SectionText/SectionText';
import OurBest from '../components/OurBest/OurBest';
import '../App.scss';

function Home({ threeBest }) {
  const container = 'container';
  return (
    <>
      <Promo />

      <section className="section about_us">
        <div className={container}>
          <Heading text="about" />
          <SectionIcon />
          <SectionText text="about" />
        </div>
      </section>

      <section className="section our-best">
        <div className="container">
          <Heading text="best" />
          <OurBest threeBest={threeBest} />
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Home;
