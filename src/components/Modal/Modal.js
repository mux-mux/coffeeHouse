import { useContext } from 'react';
import { CartContext } from '../../context/Cart';

export default function Modal({ showModal, toggleModal }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    showModal && (
      <div>
        <h1>Cart</h1>
        <div>
          <button onClick={toggleModal}>X</button>
        </div>
        <div>
          {cartItems.map((item) => {
            const { id, name, src, price, quantity } = item;
            return (
              <div key={id}>
                <div>
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={src.replace('.png', '.webp')}
                    />
                    <img src={src} alt={name} />
                  </picture>
                  <div>
                    <h1>{name}</h1>
                    <p>{price}$</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p>{quantity}</p>
                  <button
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cartItems.length > 0 ? (
          <div>
            <h1>Total: {getCartTotal()}$</h1>
            <button
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
    )
  );
}
