import { Outlet } from 'react-router-dom';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
const Layouts = () => {
  return (
    <>
      {/* <Header /> */}
      <main className='container'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
