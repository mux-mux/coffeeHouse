import { Link } from 'react-router-dom';
import './ProductCards.scss';

function ProductCards({ items }) {
  const elements = items.map((item) => {
    const { id, name, src, country, price } = item;

    return (
      <Link
        to="/productpage"
        className={`products__item ${
          items.length === 3 ? 'products__best' : 'products__search'
        }`}
        key={id}
        state={{ from: item }}
      >
        <picture className="products__img">
          <source type="image/webp" srcSet={src.replace('.png', '.webp')} />
          <img src={src} alt={name} />
        </picture>
        <div className="products__name">{name}</div>
        <div className="products__country">{country}</div>
        <div className="products__price">{price + '$'}</div>
      </Link>
    );
  });
  return <div className="products">{elements}</div>;
}

export default ProductCards;
