import './SectionIcon.scss';

function SectionIcon({ color }) {
  return (
    <div className={`section__icon section__icon_${color}`}>
      <img
        src={`./resources/icons/Section_${color}.png`}
        alt=""
        width="30"
        height="30"
        className="icon"
      />
    </div>
  );
}

export default SectionIcon;
