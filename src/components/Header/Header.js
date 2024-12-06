import Nav from '../Nav/Nav';
import ShoppingBag from '../ShoppingBag/ShoppingBag';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Nav color={'_white'} />
      <ShoppingBag color="white" />
    </header>
  );
}

export default Header;
