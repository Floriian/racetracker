import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';

const layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default layout;
