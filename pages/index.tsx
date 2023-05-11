import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import Layout from '../components/layout/LayoutMain';
import type { NextPageWithLayout } from './_app';


const Page: NextPageWithLayout = () => {
  //
  return (
    <div className="bg-backgroud">
      <div className="sm:m-auto sm:relative  sm:bg-backgroud bg-backgroud lg:w-[1228px] ">
        <div className=" sm:pt-[50px]">
          <div className="flex justify-center">
            <h1 className="text-[62px] font-medium leading-[84.57px] sm:block hidden rotate-[24.93deg] left-[408.93px] top-[144.79px] pr-[2px]">
              We
            </h1>
            <h1 className="text-[62px] font-medium leading-[84.57px] sm:block hidden rotate-[-14.8deg] left-[500.75px] top-[195.88px] pr-[10px]">
              love to
            </h1>
            <h1 className="text-[62px] font-medium leading-[84.57px] sm:block hidden rotate-[19.23deg] left-[734.99px] top-[124.48px]">
              help you!
            </h1>
            <h1 className="text-[41.45px] font-medium leading-[56.54px] w-[89px] h-[57px] sm:hidden rotate-[24.93deg]  mt-[56.17px]">
              Let’s
            </h1>
            <h1 className="text-[41.45px] font-medium leading-[84.57px] w-[96px] h-[57px] sm:hidden rotate-[-14.8deg] mt-[56.17px]">
              do it
            </h1>
            <h1 className="text-[41.45px] font-medium leading-[84.57px] w-[184px] h-[57px] sm:hidden rotate-[19.23deg]  mt-[56.17px]">
              together!
            </h1>
          </div>
          <div className="flex items-center m-auto">
            <Image
              src="/images/Group 12.png"
              alt="Picture of the author"
              className="pr-[60px]"
              width={237}
              height={237}
            />
            <div>
              <h6 className="pt-10 font-bold leading-[25.1px]  ">
                Global citizenship and residency at your fingertips
              </h6>
              <p className="font-normal leading-[25.1px]">
                Everyone has the opportunity to thrive, no matter where home is
              </p>
              <Image
                src="/images/Group 25.png"
                alt="Picture of the author"
                className="left-[513px] top-[537px] pt-[45px]"
                width={398.74}
                height={65}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="xs:skew-y-6 xl:skew-y-3 bg-gradient-to-b from-blue from-50% xs:mb-12 lg:mb-14 ">
        <section className="xs:px-3 xs:py-28 lg:py-52 xl:px-24 bg-gray-100 xs:-skew-y-12 xl:-skew-y-6">
          <div className="flex justify-evenly items-center flex-wrap gap-10 xs:skew-y-6 xl:skew-y-3">
            <Image
              src="/images/Rectangle1.png"
              alt="Picture of the author"
              className="xs:min-w-min  md:w-1/2 lg:max-w-lg "
              width={1000}
              height={1000}
            />
            <div className="xs:min-w-min md:w-1/2 lg:max-w-l">
              <h2 className="text-[32px] font-bold text-DarkBlue">
                The most valuable investment you may ever make
              </h2>
              <p className="font-light text-[16px] text-black leading-[20.08px]">
                Resimex is a multidisciplinary firm offering bespoke residence
                and citizenship solutions in Mexico. Whether it s matching you
                to your ideal investment, Golden Visa program or tax benefit, we
                help investors successfully uproot their lives and lifestyles.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center pt-10 bg-Ligthgray">
        <div className="max-w-md w-auto mr-[70px]">
          <h1 className="text-[32px] font-bold text-DarkBlue w-[279px] h-[105px] top-[1407px] left-[190px] ">
            Seamless service targeting your unique needs
          </h1>
          <br />
          <div className="flex justify-start w-full pt-3 mt-[13px] mb-[14px]">
            <div className="bg-blue w-7 h-2 "></div>
          </div>
          <p className="font-light text-[16px] text-black leading-[20.08px]">
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements.
          </p>
          <br />
          <p className="font-light text-[16px] text-black leading-[20.08px]">
            We ll assist you from start to ﬁnish, ensuring you have the insight
            and knowledge needed to succeed.
          </p>
        </div>
        <div className="flex flex-col items-center  bg-white border rounded-[10px] h-[396px] w-[497px]">
          <div className="flex flex-col items-center m-auto">
            <Image
              src="/images/Ellipse 9.png"
              alt=""
              className="rounded-full  pt-[27px] pb-[24px]"
              width={68}
              height={65}
            />
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold text-DarkBlue ">
                Residency Programs
              </h5>
              <div className="flex justify-center w-full pt-[14px] pb-[13px]">
                <div className="bg-blue w-7 h-2 "></div>
              </div>
            </Link>
            <div className="font-light text-[16px] text-black leading-[20.08px] w-[442px] h-[100px] top-[1552px] left-[566px] ">
              Mexican residency safeguards against future instability and opens
              up a world of opportunities for investors and their families. A
              Golden Visa permit provides visa-free access to many countries
              across the globe.
            </div>
            <Link
              href="#"
              className="px-[20px] py-[10px] text-[15.8px] font-medium text-center text-white bg-blue-700 rounded-lg bg-blue dark:hover:bg-DarkBlue dark:focus:ring-blue "
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-Ligthgray pt-[94px]  pb-[113px]">
        <div className="w-full flex justify-center ">
          <h1 className="mb-2 text-2xl font-bold text-DarkBlue ">
            Why Choose Us
            <div className="flex justify-center w-full pt-[14px] pb-[13px]">
              <div className="bg-blue w-7 h-2 "></div>
            </div>
          </h1>
        </div>
        <div className="flex justify-center gap-5">
          <div className="w-[241px] h-[219px] p-6 bg-white border border-gray-200 rounded-[10px]">
            <h1 className="font-bold text-DarkBlue pb-[18px]">
              Speed and Simplicity
            </h1>
            <div className="w-[190px] h-[100px] font-light">
              Easy, traveler-friendly application process. Simple and much less
              complicated than dealing with foreign governments.
            </div>
          </div>
          <div className="w-[241px] h-[219px] p-6 bg-white border border-gray-200 rounded-[10px]">
            <h1 className="font-bold text-DarkBlue pb-[18px]">
              Secure and Safe
            </h1>
            <div className="w-[190px] h-[120px] font-light">
              World-class data centers and state-of-the-art security. Your
              credit card information will never be exposed to any government
              websites!
            </div>
          </div>
          <div className="w-[241px] h-[219px] p-6 bg-white border border-gray-200 rounded-[10px]">
            <h1 className="font-bold text-DarkBlue pb-[18px]">
              Awesome support
            </h1>
            <div className="w-[190px] h-[120px] font-light">
              Our customer support is ready to help 24/7. We want you to enjoy
              your travels and avoid the stress of getting a residence!
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-baseline">
          <p className="p-[14px]">Back to top</p>
          <Link href="/">
            <button className="w-[30px] h-[30px] bg-white rounded-full flex flex-col justify-center items-center">
              <Image
                src="/images/Group 2.png"
                alt="Picture of the author"
                className="sm:left-[515px] sm:top-[285.75px] sm:pt-[50px] sm:block hidden"
                width={84}
                height={40}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-[url('/images/Rectangle9.png')]">
        <section className="flex flex-col justify-center items-center">
          <div className="mx-auto max-w-screen-xl px-10 py-16 sm:px-6 lg:px-8 w-[50%] ">
            <div className="">
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
                <form action="" className="space-y-4 ">
                  <div>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Your name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Your email"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Your message"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-blue px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
