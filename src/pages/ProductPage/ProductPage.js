import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/Cart';
import Header from '../../components/Header/Header';
import Heading from '../../components/Heading/Heading';
import SectionIcon from '../../components/SectionIcon/SectionIcon';
import Buttons from '../../components/Buttons/Buttons';
import BackButton from '../../components/Buttons/BackButton';
import './ProductPage.scss';

function ProductPage() {
  const { cartItems, addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { from } = location.state;
  const { id, name, price, src, country, descr } = from;
  return (
    <>
      <section className="promo promo-ourcoffee">
        <Header color="white" />
        <div className="container">
          <div className="section promo__content">
            <Heading as="h2" className="promo__header">
              Our Coffee
            </Heading>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <BackButton
            as="button"
            variant="white"
            size="md"
            onClick={() => navigate(-1)}
          >
            Back
          </BackButton>
          <div className="about-components mt4">
            <picture className="about-components__img-wrapper">
              <source type="image/webp" srcSet={src.replace('.png', '.webp')} />
              <img src={src} alt={name} />
            </picture>
            <div className="about-it__content">
              <Heading as="h3">About it</Heading>
              <SectionIcon color="black" />
              <div className="about-it__wrapper">
                <div className="about-it__country">
                  <strong>Country: </strong>
                  {country}
                </div>
                <p className="section__text about-it__text">
                  <strong>Description: </strong>
                  {descr}
                </p>
                <div className="about-it__price">
                  <div className="about-it__price-wrapper">
                    <strong>Price: </strong>
                    <span className="about-it__price-value">{price + '$'}</span>
                  </div>
                  <div className="about-it__button-wrapper">
                    <Buttons
                      as="button"
                      variant="black"
                      size="lg"
                      data={from}
                      onClick={() => {
                        addToCart(from);
                      }}
                    >
                      Add To Cart
                    </Buttons>
                    <span className="about-it__incart">
                      {cartItems.map((item) => {
                        return item.id === id
                          ? 'Already in cart ' + item.quantity
                          : '';
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;