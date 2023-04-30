import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Heading from '../components/Heading/Heading';
import SectionIcon from '../components/SectionIcon/SectionIcon';

function ProductPage() {
  const location = useLocation();
  const { from } = location.state;
  const { price, country, descr } = from;
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
        <section className="section about-components about-it">
          <div className="about-components__img-wrapper">
            <img
              src="/resources/product_page/Product_Preview.jpg"
              alt="aromistico coffee"
              className="about-it__img"
            />
          </div>
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
              <div>
                <strong>Price: </strong>
                <span className="about-it__price">{price + '$'}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductPage;
