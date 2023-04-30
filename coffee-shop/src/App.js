import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import SectionIcon from './components/SectionIcon/SectionIcon';
import Heading from './components/Heading/Heading';
import SectionText from './components/SectionText/SectionText';
import OurBest from './components/OurBest/OurBest';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const container = 'container';
  return (
    <>
      <section className="promo promo-main">
        <Header />
        <div className={container}>
          <Promo />
        </div>
      </section>

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
          <OurBest />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
