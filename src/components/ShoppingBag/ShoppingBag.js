import { useContext, useState } from 'react';

import { CartContext } from '../../context/Cart';
import Cart from '../Cart/Cart';
import './ShoppingBag.scss';

function ShoppingBag({ color }) {
  const [shownCart, setShownCart] = useState(false);

  const { getCartCount } = useContext(CartContext);

  function toggleCart() {
    setShownCart(!shownCart);
  }

  return (
    <>
      {!shownCart && (
        <div className="shopping" onClick={toggleCart}>
          <svg
            id="Capa_1"
            viewBox="0 0 483.1 483.1"
            className={`shopping__icon shopping__icon-` + color}
          >
            <g>
              <path
                d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6
		c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3
		C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z
		 M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1
		c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"
              />
            </g>
          </svg>
          <span className="shopping__count">{getCartCount()}</span>
        </div>
      )}
      <Cart shownCart={shownCart} toggleCart={toggleCart} />
    </>
  );
}

export default ShoppingBag;
