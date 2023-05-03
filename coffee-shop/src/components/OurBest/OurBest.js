import { Link } from 'react-router-dom';
import './OurBest.scss';
import '../ProductCards/ProductCards.scss';

function OurBest({ threeBest }) {
  const elements = threeBest.map((item, index) => {
    const { name, src, price } = item;
    return (
      <Link
        to="/productPage"
        className="products__item products__best"
        key={index}
        state={{ from: item }}
      >
        <img src={src} alt="two packs of solimo beans" className="products__img" />
        <div className="products__name">{name}</div>
        <div className="products__price">{price + '$'}</div>
      </Link>
    );
  });
  return <div className="products">{elements}</div>;
}

export default OurBest;
