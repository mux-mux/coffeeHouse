import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav({ color }) {
  let clazz = 'nav nav' + color,
    sourze = './resources/icons/Logo' + color + '.png';
  return (
    <nav className={clazz}>
      <ul>
        <li>
          <Link to="/">
            <img src={sourze} width="35" height="35" alt="two beans" className="logo" />
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
