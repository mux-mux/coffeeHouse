import Buttons from '../Buttons/Buttons';

import './Promo.css';
import '../SectionIcon/SectionIcon.css';

function Promo() {
  return (
    <div className="section promo__content">
      <h1 className="promo__header">Everything You Love About Coffee</h1>
      <div className="section__icon section__icon_white">
        <img
          src="/resources/icons/Section-header_white.png"
          alt="three beans white"
          className="icon icon_white"
        />
      </div>
      <h2 className="promo__text">
        We makes every day full of energy and taste <br />
        Want to try our beans?
      </h2>
      <Buttons />
    </div>
  );
}
export default Promo;
