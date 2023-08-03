import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav className="nav nav_black">
        <ul>
          <li>
            <Link to="/">
              <img src="./resources/icons/Logo_black.png" alt="two beans black" className="logo" />
              Coffee house
            </Link>
          </li>
          <li>
            <Link to="ourCoffee">Our coffee</Link>
          </li>
        </ul>
      </nav>
      <br />
      <div className="section__icon section__icon_black">
        <img
          src="./resources/icons/Section-footer_black.png"
          alt="three beans white"
          className="icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
