import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CartContext } from '../context/Cart';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Buttons from '../components/Buttons/Buttons';

function ProductPage() {
  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { from } = location.state;
  const { name, price, src_large, webp_large, country, descr } = from;
  return (
    <>
      <section className="promo promo-ourcoffee">
        <Header />
        <div className="container">
          <div className="section promo__content">
            <h1 className="promo__header">Our Coffee</h1>
          </div>
        </div>
      </section>
      <div className="container product-page-container">
        <Buttons
          variant="button"
          className="button button-outline button-outline-back button-sm"
          onClick={() => navigate(-1)}
        >
          Back
        </Buttons>
        <section className="section about-components">
          <picture className="about-components__img-wrapper">
            <source type="image/webp" srcSet={webp_large} />
            <img src={src_large} alt={name} />
          </picture>
          <div className="about-it__content">
            <Heading text="about_it" />
            <SectionIcon />
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
                <strong>Price: </strong>
                <span className="about-it__price-value">{price + '$'}</span>
                <Buttons
                  variant="button"
                  className="button button-fill button-lg"
                  data={from}
                  onClick={() => {
                    addToCart(from);
                  }}
                >
                  Add To Cart
                </Buttons>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductPage;
