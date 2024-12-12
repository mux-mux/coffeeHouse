import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import Buttons from '../Buttons/Buttons';
import Heading from '../Heading/Heading';
import './Modal.scss';

export default function Modal({ showModal, toggleModal }) {
  const { cartItems, addToCart, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const handleClickOnOverlay = (e) => {
    e.stopPropagation();
    toggleModal(false);
  };

  const handleClickOnContainer = (e) => {
    e.stopPropagation();
  };

  return (
    showModal && (
      <div className="overlay" onClick={handleClickOnOverlay}>
        <div className="modal" onClick={handleClickOnContainer}>
          <header className="modal__header">
            <Heading as="h4">Cart</Heading>
            <Buttons
              as="button"
              variant="black"
              size="sm"
              onClick={toggleModal}
            >
              X
            </Buttons>
          </header>
          <main className="modal__main">
            {cartItems.map((item) => {
              const { id, name, src, price, quantity } = item;
              return (
                <div key={id} className="item">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={src.replace('.png', '.webp')}
                    />
                    <img src={src} alt={name} />
                  </picture>
                  <div className="item__order">
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
                    <span className="item__order-price">{price}$</span>
                  </div>
                </div>
              );
            })}
          </main>
          {cartItems.length > 0 ? (
            <footer className="modal__footer">
              <div className="item__total">Total: {getCartTotal()}$</div>
              <Buttons as="button" variant="black" size="lg">
                Checkout
              </Buttons>
            </footer>
          ) : (
            <div className="item__empty">Your cart is empty</div>
          )}
        </div>
      </div>
    )
  );
}
