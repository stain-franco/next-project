import { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface LayoutMain {
  children: ReactNode;
}

const LayoutMain = ({ children }: LayoutMain) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutMain;
