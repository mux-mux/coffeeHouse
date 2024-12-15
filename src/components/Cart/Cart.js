import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import Buttons from '../Buttons/Buttons';
import Heading from '../Heading/Heading';
import './Cart.scss';

export default function Cart({ shownCart, toggleCart }) {
  const { cartItems, addToCart, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const handleClickOnOverlay = (e) => {
    e.stopPropagation();
    toggleCart(false);
  };

  const handleClickOnContainer = (e) => {
    e.stopPropagation();
  };

  return (
    shownCart && (
      <div className="overlay" onClick={handleClickOnOverlay}>
        <div className="cart" onClick={handleClickOnContainer}>
          <header className="cart__header">
            <Heading as="h4">Cart</Heading>
            <Buttons as="button" variant="black" size="sm" onClick={toggleCart}>
              X
            </Buttons>
          </header>
          <main className="cart__main">
            {cartItems.map((item) => {
              const { id, name, src, price, quantity } = item;
              return (
                <div key={id} className="item">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={src.replace('.png', '.webp')}
                    />
                    <img src={src} alt={name} className="item__image" />
                  </picture>
                  <div className="item__ordered">
                    <span className="item__name">{name}</span>
                    <div className="item__buttons">
                      <Buttons
                        as="button"
                        variant="white"
                        size="sm"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </Buttons>
                      <p>{quantity}</p>
                      <Buttons
                        as="button"
                        variant="white"
                        size="sm"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </Buttons>
                    </div>
                    <span className="item__ordered-price">{price}$</span>
                  </div>
                </div>
              );
            })}
          </main>
          {cartItems.length > 0 ? (
            <footer className="cart__footer">
              <div className="cart__total">Total: {getCartTotal()}$</div>
              <Buttons as="a" to="/checkout" variant="black" size="lg">
                Checkout
              </Buttons>
            </footer>
          ) : (
            <div className="cart__empty">Your cart is empty</div>
          )}
        </div>
      </div>
    )
  );
}
