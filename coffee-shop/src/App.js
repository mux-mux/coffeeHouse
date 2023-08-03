import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import OurCoffee from './pages/OurCoffee';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

const items = [
  {
    name: 'Solimo Coffee Beans 2 kg',
    src: './resources/items/Item_3.jpg',
    src_large: './resources/product_page/Solimo_Preview.jpg',
    country: 'Brazil',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 15.42,
  },
  {
    name: 'Presto Coffee Beans 1 kg',
    src: './resources/items/Item_2.jpg',
    src_large: './resources/product_page/Presto_Preview.jpg',
    country: 'Kenya',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 6.99,
  },
  {
    name: 'AROMISTICO Coffee 1 kg',
    src: './resources/items/Item_1.jpg',
    src_large: './resources/product_page/Aromistico_Preview.jpg',
    country: 'Columbia',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 10.42,
  },
  {
    name: 'Solimo Coffee Beans 2 kg',
    src: './resources/items/Item_3.jpg',
    src_large: './resources/product_page/Solimo_Preview.jpg',
    country: 'Brazil',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 15.42,
  },
  {
    name: 'Presto Coffee Beans 1 kg',
    src: './resources/items/Item_2.jpg',
    src_large: './resources/product_page/Presto_Preview.jpg',
    country: 'Kenya',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 6.99,
  },
  {
    name: 'AROMISTICO Coffee 1 kg',
    src: './resources/items/Item_1.jpg',
    src_large: './resources/product_page/Aromistico_Preview.jpg',
    country: 'Columbia',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 10.42,
  },
];

function App() {
  const threeBest = items.slice(0, 3);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home threeBest={threeBest} />} />
          <Route path="ourCoffee" element={<OurCoffee items={items} />} />
          <Route path="productPage" element={<ProductPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
