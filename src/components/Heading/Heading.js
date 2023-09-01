import './Heading.scss';

function Heading({ text }) {
  const headings = {
    about: 'About Us',
    best: 'Our best',
    beans: 'About our beans',
    about_it: 'About it',
  };
  return <h3 className="section__header">{headings[text]}</h3>;
}

export default Heading;
