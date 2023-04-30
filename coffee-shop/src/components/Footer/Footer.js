import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="nav nav_black">
        <ul>
          <li>
            <a href="index.html">
              <img src="resources/icons/Logo_black.png" alt="two beans black" className="logo" />
              Coffee house
            </a>
          </li>
          <li>
            <a href="our-coffee.html">Our coffee</a>
          </li>
        </ul>
      </nav>
      <br />
      <div className="section__icon section__icon_black">
        <img
          src="resources/icons/Section-footer_black.png"
          alt="three beans white"
          className="icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
