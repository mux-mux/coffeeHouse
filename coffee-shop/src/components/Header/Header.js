import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="nav nav_white">
        <ul>
          <li>
            <Link to="/">
              <img src="./resources/icons/Logo_white.png" alt="two beans white" className="logo" />
              Coffee house
            </Link>
          </li>
          <li>
            <Link to="/ourCoffee">Our coffee</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
