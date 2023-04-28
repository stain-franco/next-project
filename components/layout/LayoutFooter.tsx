import { ReactNode } from 'react';
import Footer from '../Footer';

interface LayaoutFooter {
  children: ReactNode;
}

const LayaoutFooter = ({ children }: LayaoutFooter) => {
  return (
    <>
      <h1>{children}</h1>
      <Footer />
    </>
  );
};

export default LayaoutFooter;
