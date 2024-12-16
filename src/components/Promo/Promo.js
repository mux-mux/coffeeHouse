import Buttons from '../Buttons/Buttons';
import Header from '../Header/Header';
import Heading from '../Heading/Heading';

import './Promo.scss';
import '../SectionIcon/SectionIcon.scss';
import SectionIcon from '../SectionIcon/SectionIcon';

function Promo() {
  return (
    <section className="promo promo-main">
      <Header color="white" />
      <div className="container">
        <div className="section promo__content">
          <Heading as="h1" className="promo__header">
            Everything You Love About Coffee
          </Heading>
          <SectionIcon color="white" />
          <Heading as="h2" className="promo__text">
            We make every day full of energy and taste
          </Heading>
          <Heading as="h2" className="promo__text">
            Want to try our beans?
          </Heading>
          <Buttons as="a" to="/ourcoffee" variant="white" size="lg">
            More
          </Buttons>
        </div>
      </div>
    </section>
  );
}
export default Promo;
