import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import { Link } from 'react-router-dom';
import './Buttons.scss';

function Buttons({ variant = 'button', ...delegated }) {
  const { addToCart } = useContext(CartContext);

  let Component;

  if (variant === 'link') {
    Component = (
      <Link
        to="/ourCoffee"
        className="button button-outline button-outline-more button-lg"
      >
        More
      </Link>
    );
  } else if (variant === 'button') {
    Component = (
      <button
        className="button button-fill button-lg"
        onClick={() => {
          addToCart(delegated.data);
        }}
      >
        Add To Cart
      </button>
    );
  }

  return <>{Component}</>;
}

export default Buttons;
