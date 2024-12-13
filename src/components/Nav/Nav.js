import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Nav.scss';

function Nav({ color }) {
  return (
    <nav className={'nav nav_' + color}>
      <ul>
        <li>
          <Link to="/">
            <Logo color={color} />
            Coffee house
          </Link>
        </li>
        <li>
          <Link to="/ourCoffee">Our coffee</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
