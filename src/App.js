import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getItems } from './services/ItemsService';

import Layout from './pages/Layout';
import OurCoffee from './pages/OurCoffee';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems('https://api.jsonbin.io/v3/b/64d8d9699d312622a3908cc8').then((data) => setItems(data));
  }, []);

  const threeBest = items.slice(0, 3);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home threeBest={threeBest} />} />
          <Route path="ourCoffee" element={<OurCoffee products={items} />} />
          <Route path="productPage" element={<ProductPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
