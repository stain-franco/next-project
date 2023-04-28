import LayoutHeader from "@/components/layout/LayoutHeader";
import { ReactElement } from 'react';
import type { NextPageWithLayout } from '../_app';

const index: NextPageWithLayout = () => {
  return (
    <div>
      <h1>get your mexican residence!</h1>
    </div>
  );
};

index.getLayout = function getLayout(index: ReactElement) {
  return <LayoutHeader>{index}</LayoutHeader>;
};

export default index;
