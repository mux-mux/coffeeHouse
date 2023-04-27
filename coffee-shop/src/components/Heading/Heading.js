import './Heading.css';

function Heading({ text }) {
  const headings = {
    about: 'About Us',
    best: 'Our best',
    about_beans: 'About our beans',
    about_it: 'About it',
  };
  return <h3 class="section__header">{headings[text]}</h3>;
}

export default Heading;
