import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import SectionIcon from '../../components/SectionIcon/SectionIcon';

import './Promo.scss';

function Promo() {
  return (
    <section className="promo promo-main">
      <div className="container">
        <Header color="white" />
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
          <Button
            as="a"
            to="/ourcoffee"
            variant="white"
            size="lg"
            className="mt2"
          >
            Choose your beans
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Promo;
