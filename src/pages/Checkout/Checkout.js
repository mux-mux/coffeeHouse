import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Cart';

import Buttons from '../../components/Buttons/Buttons';
import Heading from '../../components/Heading/Heading';
import './Checkout.scss';

const Checkout = () => {
  const navigate = useNavigate();

  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.length) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.length) {
      newErrors.email = 'Email is required';
    }
    if (formData.email.length && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format abc@mail.domain';
    }
    if (!formData.address.length) {
      newErrors.address = 'Address is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      clearCart();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {isSubmitted ? (
        <div className="modal modal-success">
          <Heading as="h3">Thank you for your purchase!</Heading>
          <span>Your order has been placed successfully.</span>
        </div>
      ) : (
        <div className="container mt4">
          <Buttons
            as="button"
            variant="white"
            size="md"
            onClick={() => navigate(-1)}
          >
            Back
          </Buttons>

          <div className="checkout mt4 mcenter">
            <Heading as="h2">Checkout</Heading>
            <form
              id="checkoutForm"
              className="checkout__form mt4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address*</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
              </div>
              <span className="checkout__required">* - required fields</span>
              <div className="checkout__summary mt2 pv2">
                <Heading as="h4">Cart Summary</Heading>
                <ul className="checkout__items">
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.name} - {item.quantity} x ${item.price} = $
                      {item.quantity * item.price}
                    </li>
                  ))}
                </ul>
                <div className="checkout__total">Total: ${getCartTotal()}</div>
              </div>
              <Buttons
                as="submit"
                variant="black"
                size="lg"
                form="checkoutForm"
              >
                Place Order
              </Buttons>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
