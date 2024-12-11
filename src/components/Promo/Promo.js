import Buttons from '../Buttons/Buttons';
import Header from '../Header/Header';

import './Promo.scss';
import '../SectionIcon/SectionIcon.scss';
import SectionIcon from '../SectionIcon/SectionIcon';

function Promo() {
  return (
    <section className="promo promo-main">
      <Header />
      <div className="container">
        <div className="section promo__content">
          <h1 className="promo__header">Everything You Love About Coffee</h1>
          <SectionIcon color="white" />
          <h2 className="promo__text">
            We make every day full of energy and taste
          </h2>
          <div className="promo__text">Want to try our beans?</div>
          <Buttons as="a" to="/ourCoffee" variant="white" size="lg">
            More
          </Buttons>
        </div>
      </div>
    </section>
  );
}
export default Promo;
