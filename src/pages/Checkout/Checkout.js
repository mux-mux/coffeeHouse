import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Cart';

import Button from '../../components/Button/Button';
import BackButton from '../../components/Button/BackButton';
import Heading from '../../components/Heading/Heading';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';

import './Checkout.scss';

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
    navigate(-1);
  }

  function validateForm() {
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormData({ name: '', email: '', address: '' });
      clearCart();
      setShowModal(true);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <div className="container">
        <BackButton
          as="button"
          variant="white"
          size="md"
          className="mt4"
          onClick={() => navigate(-1)}
        >
          Back
        </BackButton>

        <div className="checkout">
          <Heading as="h2">Checkout</Heading>
          <form
            id="checkoutForm"
            className="checkout__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              errors={errors.name}
              placeholder=""
            >
              Name*
            </Input>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              errors={errors.email}
              placeholder=""
            >
              Email*
            </Input>
            <Input
              type="textarea"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              errors={errors.address}
              placeholder=""
            >
              Address*
            </Input>
            <span className="checkout__required">* - required fields</span>
            <div className="checkout__summary">
              <Heading as="h4">Cart Summary</Heading>
              <ul className="checkout__items">
                {cartItems.map((item) => (
                  <li className="checkout__item" key={item.id}>
                    {item.name} - {item.quantity} x ${item.price} = $
                    {item.quantity * item.price}
                  </li>
                ))}
              </ul>
              <div className="checkout__total">Total: ${getCartTotal()}</div>
            </div>
            <Button as="submit" variant="black" size="lg" form="checkoutForm" disabled={showModal}>
              Place Order
            </Button>
          </form>
        </div>
      </div>
      {showModal && (
        <Modal
          type="success"
          title="Success!"
          onClose={closeModal}
          timeout={5000}
        >
          <Heading as="h3">Thank you for your purchase!</Heading>
          <span>Your order has been placed successfully.</span>
        </Modal>
      )}
    </>
  );
}

export default Checkout;
