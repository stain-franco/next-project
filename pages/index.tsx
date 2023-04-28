import Image from 'next/image';
import type { ReactElement } from 'react';
import Layout from '../components/layout/LayoutMain';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <div className="flex flex-col items-center p-10">
          <h1 className="text-[62px] font-medium">We love to help yout!</h1>
          <h6 className="pt-10 font-bold">
            Global citizenship and residency at your fingertips
          </h6>
          <p>Everyone has the opportunity to thrive, no matter where home is</p>
        </div>
      </main>
      <div className="flex flex-col items-center">
        <Image src="" alt="Picture of the author" width={500} height={500} />

        <div className='flex flex-col items-center pb-11'>
          <h1 className="text-[36px] font-bold text-blue-700">
            The most valuable investment you may ever make
          </h1>
          <p>
            Resimex is a multidisciplinary firm offering bespoke residence and
            citizenship solutions in Mexico. 
            <br />
            <p>Whether it’s matching you to your
            ideal investment, Golden Visa program or tax benefit, we help
            investors successfully uproot their lives and lifestyles.</p>
          </p>
        </div>
      </div>
      <div className="flex justify-center m-auto pt-10">
        <div className="max-w-sm p-6">
          <h1>Seamless service targeting your unique needs</h1>
          <br />
          <p>
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements.
          </p>
          <br />
          <p>
            We’ll assist you from start to ﬁnish, ensuring you have the insight
            and knowledge needed to succeed.
          </p>
        </div>
        <div className="max-w-sm p-6 flex flex-col items-center bg-white border border-rose-600 rounded-md">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold text-blue-700">
              Residency Programs
            </h5>
          </a>
          <p className="mb-3 font-normal ">
            Mexican residency safeguards against future instability and opens up
            a world of opportunities for investors and their families. A Golden
            Visa permit provides visa-free access to many countries across the
            globe.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </a>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
