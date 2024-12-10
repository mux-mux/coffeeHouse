import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
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
            <button onClick={toggleModal}>X</button>
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
                      <button
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
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
              <button>Checkout</button>
            </div>
          ) : (
            <h3>Your cart is empty</h3>
          )}
        </div>
      </div>
    )
  );
}
