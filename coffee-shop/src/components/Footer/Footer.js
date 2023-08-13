import Nav from '../Nav/Nav';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Nav color={'_black'} />
      <br />
      <div className="section__icon section__icon_black">
        <img
          src="./resources/icons/Section-footer_black.png"
          alt="three beans white"
          width="35"
          height="35"
          className="icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
