import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav nav_white">
        <ul>
          <li>
            <a href="index.html">
              <img src="/resources/icons/Logo_white.png" alt="two beans white" className="logo" />
              Coffee house
            </a>
          </li>
          <li>
            <a href="our-coffee.html">Our coffee</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
