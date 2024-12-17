import './SectionIcon.scss';

function SectionIcon({ color }) {
  return (
    <div className={`divider divider_${color}`}>
      <img
        src={`./resources/icons/Section_${color}.png`}
        alt=""
        className="divider__icon"
      />
    </div>
  );
}

export default SectionIcon;
