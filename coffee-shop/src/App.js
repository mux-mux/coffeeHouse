import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import SectionIcon from './components/SectionIcon/SectionIcon';
import Heading from './components/Heading/Heading';
import './App.css';

function App() {
  const container = 'container';
  return (
    <>
      <section class="promo promo-main">
        <Header />
        <div className={container}>
          <Promo />
        </div>
      </section>

      <section class="section about_us">
        <div className={container}>
          <Heading text="about" />
          <SectionIcon />
        </div>
      </section>
    </>
  );
}

export default App;
