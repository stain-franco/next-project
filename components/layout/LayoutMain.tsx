import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface ILayoutMain {
  children: ReactNode;
}

const LayoutMain = ({ children }: ILayoutMain) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutMain;
