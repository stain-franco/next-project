import LayaoutFooter from '@/components/layout/LayoutFooter';
import { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

const HomeApli: NextPageWithLayout = () => {
  return (
    <>
    </>
  );
};

HomeApli.getLayout = function getLayout(HomeApli: ReactElement) {
  return <LayaoutFooter>{HomeApli}</LayaoutFooter>;
};

export default HomeApli;
