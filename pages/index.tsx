import type { ReactElement } from 'react';
import Layout from '../components/layout/LayoutMain';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className="bg-red-200">HOME</div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
