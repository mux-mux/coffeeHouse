import { Link } from 'react-router-dom';
import './ProductCards.scss';

function ProductCards({ items }) {
  const elements = items.map((item, index) => {
    const { name, src, webp, webp_large, country, price } = item;
    const pageClass =
      items.length === 3 ? 'products__best' : 'products__search';

    const preloadPageImages = (imageSrcs) => {
      imageSrcs.forEach((imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
      });
    };

    return (
      <Link
        to="/productPage"
        className={`products__item ${pageClass}`}
        key={index}
        state={{ from: item }}
        onMouseEnter={() => preloadPageImages([webp_large])}
      >
        <picture className="products__img">
          <source type="image/webp" srcSet={webp} />
          <img src={src} alt="two packs of beans" />
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
