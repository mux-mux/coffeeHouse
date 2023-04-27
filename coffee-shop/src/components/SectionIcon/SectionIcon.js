import './SectionIcon.css';
import beans_black from '../../resources/icons/Section-footer_black.png';

function SectionIcon() {
  return (
    <>
      <div class="section__icon section__icon_black">
        <img src={beans_black} alt="three beans black" class="icon" />
      </div>
    </>
  );
}

export default SectionIcon;
