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
          <div className="flex bg-backgroud ">
            <div className="flex items-center justify-center m-auto sm:flex sm:m-auto sm:items-center sm:justify-center pb-[54px]">
              <Image
                src="/images/Group 2.png"
                alt="Picture of the author"
                className="sm:left-[515px] sm:top-[285.75px] sm:pt-[50px] sm:block hidden"
                width={84}
                height={40}
              />
              <Image
                src="/images/Group 3.png"
                alt="Picture of the author"
                className="sm:left-[873px] sm:top-[282px] pt-[10px] ml-[276.75px] sm:block hidden"
                width={50}
                height={41}
              />
              <Image
                src="/images/Group 2.png"
                alt="Picture of the author"
                className="left-[200px] top-[231.38px] pt-[50px] sm:hidden "
                width={77.55}
                height={26.97}
              />
              <Image
                src="/images/Group 3.png"
                alt="Picture of the author"
                className="ml-[186px] pt-[23px] sm:hidden "
                width={33.72}
                height={27.65}
              />
            </div>
          </div>

          <main
            className="bg-backgroud sm:bg-[url('/images/Group.png')] 
     bg-[url('/images/Frame.png')] bg-no-repeat m-auto pb-[60px]"
          >
            <div className=" sm:flex sm:flex-col sm:items-center sm:p-[50px] ">
              <div className="flex  items-center sm:flex sm:items-center sm:m-auto">
                <div className="m-auto mr-[18px] sm:mr-[77px]">
                  <div className="w-[203px] h-[203px] ml-[-20px] sm:w-[237px] sm:h-[237px] rounded-full bg-white flex flex-col justify-center items-center ">
                    <h3 className="text-blue font-Inter text-justify text-3xl ">
                      <p className="text-[20px]">👋</p>Say,<br></br>Hello!
                    </h3>
                    <button className="sm:w-[57px] sm:h-[57px] w-[48.82px] h-[48.82px] rounded-full bg-blue sm:ml-[164px] sm:mt-[164px] ml-[140px] mt-[140px] absolute">
                      <Image
                        src="/images/IconF.png"
                        alt="Picture of the author"
                        className="ml-[16px] mt-[6px] sm:block hidden"
                        width={23.97}
                        height={24}
                      />
                      <Image
                        src="/images/IconF.png"
                        alt="Picture of the author"
                        className="ml-[14px] mt-[4px] sm:hidden"
                        width={20.53}
                        height={20.53}
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <h6 className="sm:pt-[10px] font-bold sm:font-bold sm:leading-[25.1px] leading-[19.1px] sm:bg-backgroud text-[14px] sm:text-[20px] w-[189px] sm:w-[509px] ">
                    Global citizenship and residency at your fingertips
                  </h6>
                  <p className="leading-[19.1px] font-normal sm:font-normal sm:leading-[25.1px] text-[14px] sm:text-[20px] w-[189px] sm:w-[509px]">
                    Everyone has the opportunity to thrive, no matter where home
                    is
                  </p>
                  <Image
                    src="/images/Group 25.png"
                    alt="Picture of the author"
                    className="left-[513px] top-[537px] pt-[45px] sm:block hidden"
                    width={398.74}
                    height={65}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center pt-[100px]">
                <Image
                  src="/images/Group 25.png"
                  alt="Picture of the author"
                  className="left-[513px] top-[537px] pt-[45px] sm:hidden m-auto"
                  width={398.74}
                  height={65}
                />
              </div>
            </div>
          </main>

          <div className="xs:skew-y-6 xl:skew-y-3 bg-gradient-to-b from-blue from-50% xs:mb-12 lg:mb-14 ">
            <section className="xs:px-3 xs:py-28 lg:py-52 xl:px-24 bg-white xs:-skew-y-12 xl:-skew-y-6">
              <div className="flex justify-evenly items-center flex-wrap gap-10 xs:skew-y-6 xl:skew-y-3">
                <div className="sm:flex sm:m-auto sm:justify-center ">
                  <Image
                    src="/images/photo.png"
                    alt="Picture of the author"
                    className="rounded-[10px] sm:block hidden"
                    width={405}
                    height={287}
                  />
                  <Image
                    src="/images/photo.png"
                    alt="Picture of the author"
                    className="rounded-[8.96px] sm:hidden m-auto"
                    width={363}
                    height={243.79}
                  />
                  <div className="">
                    <h2 className="text-[32px] font-bold text-DarkBlue mt-[43.21px] leading-[35.2px] sm:w-[384px] sm:h-[105px] sm:ml-[44px] sm:mb-[21px] mb-[21px]">
                      The most valuable investment you may ever make
                    </h2>
                    <div className="flex justify-start w-full   sm:flex sm:justify-start sm:w-full sm:ml-[44px]">
                      <div className="bg-blue w-7 h-2  sm:w-7 sm:h-2  sm:mb-[21px] mb-[24px]"></div>
                    </div>
                    <p className="font-light text-[16px] text-black leading-[20.08px]  sm:w-[451px] sm:h-[120px] sm:ml-[44px]">
                      Resimex is a multidisciplinary firm offering bespoke
                      residence and citizenship solutions in Mexico.
                      <br />
                      <br />
                      Whether it’s matching you to your ideal investment, Golden
                      Visa program or tax benefit, we help investors
                      successfully uproot their lives and lifestyles.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="">
            <div className="pt-[47px] sm:flex sm:justify-center sm:items-center  bg-Ligthgray">
              <div className="  sm:w-auto ">
                <h1 className="text-[32px] leading-[35.2px] font-bold text-DarkBlue ml-[22px] w-[370px] h-[105px] sm:ml-[190px] sm:w-[279px] sm:h-[105px] ">
                  Seamless service targeting your unique needs
                </h1>

                <div className="flex justify-start w-full  mt-[13px] mb-[14px] sm:ml-[190px] ml-[22px]">
                  <div className="bg-blue w-7 h-2 "></div>
                </div>
                <p className="font-light text-[16px] text-black leading-[21.82px] ml-[22px] w-[369px]  sm:leading-[20.08px] sm:w-[280px]  sm:ml-[190px]">
                  Lifestyle choices vary, which is why we take the time to learn
                  about your individual situation and requirements.
                </p>
                <br className="sm:block hidden" />
                <p className="font-light text-[16px] text-black leading-[21.82px] ml-[22px] w-[369px] h-[132px] sm:leading-[20.08px] sm:w-[280px] sm:h-[160px] sm:ml-[190px]">
                  We’ll assist you from start to ﬁnish, ensuring you have the
                  insight and knowledge needed to succeed.
                </p>
              </div>
              <div className="sm:m-auto ml-[11px] sm:flex sm:flex-col sm:items-center  bg-white border rounded-[10px] sm:h-[396px] sm:w-[497px]">
                <div className="flex flex-col items-center ">
                  <Image
                    src="/images/Ellipse 9.png"
                    alt=""
                    className="rounded-full  pt-[27px] pb-[24px]"
                    width={68}
                    height={65}
                  />
                  <Link href="#">
                    <h5 className=" text-[20px] leading-[22px] w-[190px] h-[22px] font-bold text-DarkBlue ">
                      Residency Programs
                    </h5>
                    <div className="flex justify-center w-full pt-[14px] pb-[13px]">
                      <div className="bg-blue w-7 h-2 "></div>
                    </div>
                  </Link>
                  <div className="flex flex-col items-center place-content-between sm:flex sm:flex-col sm:items-center sm:place-content-between font-light text-[16px] text-black leading-[21.82px] sm:leading-[20.08px] w-[324px] h-[154px] mb-[58px] sm:w-[442px] sm:h-[176px]  ">
                    Mexican residency safeguards against future instability and
                    opens up a world of opportunities for investors and their
                    families. A Golden Visa permit provides visa-free access to
                    many countries across the globe.
                    <Link
                      href="#"
                      className="sm:block hidden px-[20px] py-[10px] text-[15.8px] leading-[23.7px] font-medium text-center text-white bg-blue-700 rounded-lg bg-blue dark:hover:bg-DarkBlue dark:focus:ring-blue "
                    >
                      Get started
                    </Link>
                    <Link
                      href="#"
                      className="sm:hidden px-[20px] py-[10px] text-[15.8px] font-medium leading-[23.7px] text-center text-white bg-blue-700 rounded-lg bg-blue dark:hover:bg-DarkBlue dark:focus:ring-blue mt-[34px]"
                    >
                      Send Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-Ligthgray pt-[94px]  pb-[113px]">
            <div className="w-full flex justify-center items-center">
              <h1 className="mb-2 text-[32px] font-bold text-DarkBlue  ">
                Why Choose Us
                <div className="flex justify-center w-full pt-[14px] pb-[13px]">
                  <div className="bg-blue w-7 h-2 "></div>
                </div>
              </h1>
            </div>
            <div className="  sm:flex sm:justify-center sm:items-center sm:gap-5">
              <div className="mb-[22px] w-[351px] ml-[31px] h-[186px] text-center sm:w-[241px] sm:h-[219px] sm:p-6 bg-white border border-gray-200 rounded-[10px]">
                <h1 className="font-bold text-DarkBlue   pt-[34px] pb-[18px] sm:mb-[18px] sm:text-[20px] sm:w-[200px] sm:h-[22px] sm:text-center">
                  Speed and Simplicity
                </h1>
                <div className="w-[298px] pl-[28px]  sm:w-[190px] sm:h-[100px] sm:font-light sm:text-center">
                  Easy, traveler-friendly application process. Simple and much
                  less complicated than dealing with foreign governments.
                </div>
              </div>
              <div className="mb-[22px] w-[351px] h-[186px] ml-[31px] text-center sm:w-[241px] sm:h-[219px] sm:p-6 bg-white border border-gray-200 rounded-[10px]">
                <h1 className="font-bold text-DarkBlue pt-[34px] pb-[18px] sm:mb-[18px] sm:w-[150px] sm:h-[22px] sm:text-center">
                  Secure and Safe
                </h1>
                <div className="w-[294px] pl-[29px] sm:w-[190px] sm:h-[120px] sm:font-light sm:text-center">
                  World-class data centers and state-of-the-art security. Your
                  credit card information will never be exposed to any
                  government websites!
                </div>
              </div>
              <div className="w-[351px] h-[186px] ml-[31px] text-center sm:w-[241px] sm:h-[219px] sm:p-6 bg-white border border-gray-200 rounded-[10px]">
                <h1 className="font-bold text-DarkBlue  pt-[34px] pb-[18px] sm:text-center">
                  Awesome support
                </h1>
                <div className="w-[298px] pl-[29px] sm:w-[190px] sm:h-[120px] sm:font-light sm:text-center">
                  Our customer support is ready to help 24/7. We want you to
                  enjoy your travels and avoid the stress of getting a
                  residence!
                </div>
              </div>
            </div>
            <div className="sm:block hidden">
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
          </div>
          <div className="bg-[url('/images/Rectangle9.png')] bg-no-repeat bg-cover bg-center ">
            <section className="sm:flex sm:flex-col sm:justify-center sm:items-center ">
              <div className="sm:mx-auto sm:max-w-screen-xl sm:px-10 sm:py-16 pl-[11px] pr-[14px] pt-[89px] pb-[116px] sm:lg:px-8 sm:w-[50%] ">
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
                      <div className="sm:block hidden sm:mt-4 ">
                        <button
                          type="submit"
                          className="inline-block w-full rounded-lg bg-blue px-5 py-3 font-medium text-white sm:w-auto"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                      <div className="sm:hidden flex justify-center">
                      
                        <button
                          type="submit"
                          className=" text-[15.8px]  leading-[23.7px] bg-blue px-5 py-3 rounded-[12.64px] font-medium text-white "
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
          <div className="absolute sm:bottom-[-116px] right-[71px] lg:block hidden ">
            <div className=" sm:w-[237px] sm:h-[237px] rounded-full bg-white flex flex-col justify-center items-center ">
              <h3 className="text-blue font-Inter text-justify text-3xl ">
                <p className="text-[20px]">👋</p>Say,<br></br>Hello!
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
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
