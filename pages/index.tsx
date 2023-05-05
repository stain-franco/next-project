import Image from 'next/image';
import Link from 'next/link';
import type { ReactElement } from 'react';
import Layout from '../components/layout/LayoutMain';
import type { NextPageWithLayout } from './_app';
import photo from "../public/images/fatherSon.png"

const Page: NextPageWithLayout = () => { //
  return (
    <div className='m-auto relative w-full bg-backgroud'>
     <div className='w-[1228px] m-auto'>
     <main className="bg-backgroud bg-[url('/images/Group.png')] bg-no-repeat ">
        <div className="flex flex-col items-center p-10 ">
          <h1 className="text-[62px] font-medium leading-[84.57px] sm:block hidden">
            We love to help yout!
          </h1>
          <h1 className='text-[62px] font-medium leading-[84.57px] sm:hidden '>Let’s  do it  together!</h1>
          
          <div className="flex m-auto ">
            <Image
              src="/images/Group 2.png"
              alt="Picture of the author"
              className="left-[515px] top-[283px] pt-[5px] "
              width={84}
              height={40}
            />
            <Image
              src="/images/Group 3.png"
              alt="Picture of the author"
              className="left-[873px] top-[282px] pt-[10px] ml-[276.75px]"
              width={50}
              height={41}
            />
          </div>
          <div className='flex items-center m-auto'>
          <div className='mr-[77px]'>
      <div className=" w-[237px] h-[237px] rounded-full bg-white flex flex-col justify-center items-center ">
        <h3 className="text-blue font-Inter text-justify text-3xl "><p className='text-[20px]'>👋</p>Say,<br></br>Hello!
        </h3>
        <button className="sm:w-[57px] sm:h-[57px] rounded-full bg-blue ml-[164px] mt-[164px] absolute">
        <Image
          src="/images/IconF.png"
          alt="Picture of the author"
          className="ml-[16px] mt-[6px] " 
          width={23.97}
          height={24}
        />
        </button>
      </div>
      </div>
            <div>
            <h6 className="sm:pt-[10px] font-bold sm:leading-[25.1px] leading-[19px] bg-blue sm:bg-backgroud">
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
        <section className="xs:px-3 xs:py-28 lg:py-52 xl:px-24 bg-white xs:-skew-y-12 xl:-skew-y-6">
          <div className="flex justify-evenly items-center flex-wrap gap-10 xs:skew-y-6 xl:skew-y-3">
            <Image
              src={photo}
              alt="Picture of the author"
              className="xs:min-w-min   lg:max-w-lg "
              width={405}
              height={287}
            />
            <div className="xs:min-w-min  lg:max-w-lg">
              <h2 className="text-[32px] font-bold text-DarkBlue">
                The most valuable investment you may ever make
              </h2>
              <p className="font-light text-[16px] text-black leading-[20.08px]">
                Resimex is a multidisciplinary firm offering bespoke residence
                and citizenship solutions in Mexico. Whether it’s matching you
                to your ideal investment, Golden Visa program or tax benefit, we
                help investors successfully uproot their lives and lifestyles.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="">
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
            We’ll assist you from start to ﬁnish, ensuring you have the insight
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
            <h1 className="font-bold text-DarkBlue pb-[18px]">Speed and Simplicity</h1>
            <div className='w-[190px] h-[100px] font-light'>
              Easy, traveler-friendly application process. Simple and much less
              complicated than dealing with foreign governments.
            </div>
          </div>
          <div className="w-[241px] h-[219px] p-6 bg-white border border-gray-200 rounded-[10px]">
            <h1 className="font-bold text-DarkBlue pb-[18px]">Secure and Safe</h1>
            <div className='w-[190px] h-[120px] font-light'>
              World-class data centers and state-of-the-art security. Your
              credit card information will never be exposed to any government
              websites!
            </div>
          </div>
          <div className="w-[241px] h-[219px] p-6 bg-white border border-gray-200 rounded-[10px]">
            <h1 className="font-bold text-DarkBlue pb-[18px]">Awesome support</h1>
            <div className='w-[190px] h-[120px] font-light'>
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
                src="/images/Vector.png"
                alt="Picture of the author"
                className="left-[5px] top-[4px] bg-white justify-center "
                width={14}
                height={16}
              />
            </button>
          </Link>
        </div>
      </div>  
      <div className="bg-[url('/images/Rectangle9.png')] bg-no-repeat bg-cover bg-center ">
      <section className="flex flex-col justify-center items-center ">
        <div className="mx-auto max-w-screen-xl px-10 py-16 sm:px-6 lg:px-8 w-[50%] ">
          <div className="">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
              <form action="" className="space-y-4 ">
                <div>
                  <input
                    className="w-full rounded-lg border-gray-200 border-none p-3 text-sm "
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
                    className="inline-block w-full rounded-lg bg-blue px-5 py-3 font-medium text-white sm:w-auto">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      
      </div>
      <div className='absolute sm:bottom-[-116px] right-[71px] lg:block hidden '>
      <div className=" sm:w-[237px] sm:h-[237px] rounded-full bg-white flex flex-col justify-center items-center ">
        <h3 className="text-blue font-Inter text-justify text-3xl "><p className='text-[20px]'>👋</p>Say,<br></br>Hello!
        </h3>
        <button className="sm:w-[57px] sm:h-[57px] rounded-full bg-blue ml-[164px] mt-[164px] absolute">
        <Image
          src="/images/IconF.png"
          alt="Picture of the author"
          className="ml-[16px] mt-[6px]" 
          width={23.97}
          height={24}
        />
        </button>
      </div>
      </div>
     </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
