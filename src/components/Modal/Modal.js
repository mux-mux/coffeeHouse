import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import Buttons from '../Buttons/Buttons';
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
          <div className="modal__header">
            <h3>Cart</h3>
            <Buttons
              as="button"
              variant="black"
              size="sm"
              onClick={toggleModal}
            >
              X
            </Buttons>
          </div>
          <div className="modal__main">
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
                    <h4>{name}</h4>
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
          </div>
          {cartItems.length > 0 ? (
            <div className="modal__footer">
              <h3>Total: {getCartTotal()}$</h3>
              <Buttons as="button" variant="black" size="lg">
                Checkout
              </Buttons>
            </div>
          ) : (
            <h3>Your cart is empty</h3>
          )}
        </div>
      </div>
    )
  );
}
