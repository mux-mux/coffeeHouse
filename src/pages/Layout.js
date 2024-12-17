import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
