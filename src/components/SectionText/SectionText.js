import './SectionText.scss';

function SectionText({ text }) {
  const pText = {
    about: (
      <>
        Welcome to our coffee webstore, your ultimate destination for premium
        coffee beans that elevate your daily brew. We specialize in delivering
        the finest coffee selections to satisfy every coffee lover's palate.
        From the rich and full-bodied <strong>Solimo Coffee Beans (1kg)</strong>{' '}
        to the bold and aromatic <strong>Presto Coffee Beans (1kg)</strong>, we
        cater to those who crave quality in every cup. Our offerings are
        carefully curated to ensure freshness, flavor, and satisfaction, making
        your coffee experience truly exceptional.
        <span className="pBreak"></span>
        At our store, we also feature the exquisite{' '}
        <strong>AROMISTICO Coffee Beans (1kg)</strong>, crafted to transport you
        to the heart of Italian coffee culture. With every bag, we promise not
        just coffee but an invitation to savor the artistry and tradition of
        exceptional roasting. Whether you’re stocking up for your home brewing
        station or searching for the perfect gift for a coffee enthusiast, we’ve
        got you covered. Discover the joy of brewing premium coffee with us and
        make every sip a moment of delight!
      </>
    ),
    beans: (
      <>
        Our carefully curated selection of coffee beans offers something for
        every taste and brewing style.
        <span className="pBreak"></span>
        Each bag is freshly packed to ensure exceptional quality and flavor in
        every brew.
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
