import Buttons from '../Buttons/Buttons';
import white_beans from '../../resources/icons/Section-header_white.png';

import './Promo.css';
import '../SectionIcon/SectionIcon.css';

function Promo() {
  return (
    <>
      <div class="section promo__content">
        <h1 class="promo__header">Everything You Love About Coffee</h1>
        <div class="section__icon section__icon_white">
          <img src={white_beans} alt="three beans white" class="icon icon_white" />
        </div>
        <h2 class="promo__text">
          We makes every day full of energy and taste <br />
          Want to try our beans?
        </h2>
        <Buttons />
      </div>
    </>
  );
}
export default Promo;
