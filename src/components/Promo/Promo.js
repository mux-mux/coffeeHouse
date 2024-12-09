import Buttons from '../Buttons/Buttons';
import Header from '../Header/Header';

import './Promo.scss';
import '../SectionIcon/SectionIcon.scss';

function Promo() {
  return (
    <section className="promo promo-main">
      <Header />
      <div className="container">
        <div className="section promo__content">
          <h1 className="promo__header">Everything You Love About Coffee</h1>
          <div className="section__icon section__icon_white">
            <img
              src="./resources/icons/Section-header_white.png"
              alt="three beans white"
              width="38"
              height="38"
              className="icon icon_white"
            />
          </div>
          <h2 className="promo__text">
            We make every day full of energy and taste
          </h2>
          <div className="promo__text">Want to try our beans?</div>
          <Buttons
            variant="link"
            className="button button-outline button-outline-more button-lg"
            to="/ourCoffee"
          >
            More
          </Buttons>
        </div>
      </div>
    </section>
  );
}
export default Promo;
