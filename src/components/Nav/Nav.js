import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Nav.scss';

function Nav({ color }) {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <Link to="/" className={`nav__link nav__link-${color}`}>
            <Logo color={color} />
            Coffee house
          </Link>
        </li>
        <li>
          <Link to="/ourcoffee" className={`nav__link nav__link-${color}`}>
            Our coffee
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
