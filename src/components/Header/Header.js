import Nav from '../Nav/Nav';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

import './Header.scss';

function Header({ color }) {
  return (
    <header className="header">
      <Nav color={color} />
      <ShoppingBag color={color} />
    </header>
  );
}

export default Header;
