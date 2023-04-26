import { ReactNode } from 'react';
import Header from '../Header';

interface LayoutMain {
  children: ReactNode;
}

const LayoutHeader = ({ children }: LayoutMain) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default LayoutHeader;
