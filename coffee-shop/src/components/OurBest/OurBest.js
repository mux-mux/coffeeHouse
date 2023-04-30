import './OurBest.css';
import '../ProductCards/ProductCards.css';

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace('./', '')] = r(item);
//   });
//   return images;
// }

// const images = importAll(require.context('../../resources/items/', false, /\.(png|jpe?g|svg)$/));

const bestItems = [
  {
    name: 'Solimo Coffee Beans 2 kg',
    src: '/resources/items/Item_1.jpg',
    href: 'product-page.html',
    price: 10.73,
  },
  {
    name: 'Presto Coffee Beans 1 kg',
    src: '/resources/items/Item_2.jpg',
    href: 'product-page.html',
    price: 15.99,
  },
  {
    name: 'AROMISTICO Coffee 1 kg',
    src: '/resources/items/Item_3.jpg',
    href: 'product-page.html',
    price: 6.99,
  },
];

function OurBest() {
  const elements = bestItems.map((item) => {
    const { name, src, href, price } = item;
    return (
      <a href={href} className="products__item products__best">
        <img src={src} alt="two packs of solimo beans" className="products__img" />
        <div className="products__name">{name}</div>
        <div className="products__price">{price + '$'}</div>
      </a>
    );
  });
  return <div className="products">{elements}</div>;
}

export default OurBest;
