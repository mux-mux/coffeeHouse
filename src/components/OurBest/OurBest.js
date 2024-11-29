import { Link } from 'react-router-dom';
import './OurBest.scss';

function OurBest({ threeBest }) {
  const elements = threeBest.map((item, index) => {
    const { name, src, webp, price } = item;
    return (
      <Link
        to="/productPage"
        className="products__item products__best"
        key={index}
        state={{ from: item }}
      >
        <picture className="products__img">
          <source type="image/webp" srcSet={webp} />
          <img src={src} alt="two packs of beans" />
        </picture>
        <div className="products__name">{name}</div>
        <div className="products__price">{price + '$'}</div>
      </Link>
    );
  });
  return <div className="products">{elements}</div>;
}

export default OurBest;
