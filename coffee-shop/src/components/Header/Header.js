import './Header.css';
import logo from '../../resources/icons/Logo_white.png';

function Header() {
  return (
    <>
      <header class="header">
        <nav class="nav nav_white">
          <ul>
            <li>
              <a href="index.html">
                <img src={logo} alt="two beans white" class="logo" />
                Coffee house
              </a>
            </li>
            <li>
              <a href="our-coffee.html">Our coffee</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
