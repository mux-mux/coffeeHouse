import './SectionText.scss';

function SectionText({ text }) {
  const pText = {
    about: (
      <>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid
        at highly months do things on at. Situation recommend objection do intention so questions.
        As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
        Children me laughing we prospect answered followed. At it went is song that held help face.
        <span className="pBreak"></span>
        Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as
        draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined
        day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most
        gave hope. Secure active living depend son repair day ladies now.
      </>
    ),
    beans: (
      <>
        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        <span className="pBreak"></span>
        Afraid at highly months do things on at. Situation recommend objection do intention
        <br /> so questions. <br /> As greatly removed calling pleased improve an. Last ask him cold
        feel <br /> met spot shy want. Children me laughing we prospect answered followed. At it
        went <br /> is song that held help face.'
      </>
    ),
  };

  let clazz = 'section__text';
  clazz += text === 'about' ? ' about_us__text' : ' about-components__text';

  return (
    <>
      <p className={clazz}>{pText[text]}</p>
    </>
  );
}
export default SectionText;
