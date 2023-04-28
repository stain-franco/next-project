
import LayoutMain from '@/components/layout/LayoutMain';
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
  return <LayoutMain>{index}</LayoutMain>;
};

export default index;
