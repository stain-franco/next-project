
import type { NextPageWithLayout } from '../_app';
import Image from 'next/image';
import imgAbout from "../../public/images/Rectangle1Mariachi.png";


const index: NextPageWithLayout = () => {
  return (
    <div className="mr-auto  bg-backgroud h-[1214px] relative w-full ">
      <div className="bg-backgroud absolute">
        <h1 className="text-3xl font-Nunito font-bold sm:left-[96px] left-[32px] absolute sm:top-[38px] top-[23px]">
          resimex
        </h1>
      </div>
      <div className="bg-backgroud  flex flex-wrap justify-center">
        <div className="text-center text-[32px] text-DarkBlue w-full font-bold font-Nunito top-[155px] absolute">
          <h2>Get your Mexican Residence</h2>
        </div>

        <div className="flex justify-center w-full absolute sm:top-[203px] top-[249px] ">
          <div className="bg-blue w-7 h-2 "></div>
        </div>

        <div className="sm:w-516 w-[380px] text-center absolute sm:top-[231px] top-[280px] font-Mulish">
          <p>
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements.
            <br></br>
            <br></br>
            We ll assist you from start to ﬁnish, ensuring you have the insight
            and knowledge needed to succeed.
          </p>
        </div>
        <div className="w-full flex justify-center absolute top-[381px]">
          <div className="w-[398px] bg-white h-416 z-12 absolute rounded-[10px] shadow  sm:w-[540px]">
            <div className="w-[49px] h-[49px] rounded-full bg-backgroud top-12  sm:left-[34px] left-[14px] absolute z-10">
              <h2 className="text-center font-Nunito text-3xl pt-[7px]">1</h2>
            </div>
            <div className="w-[49px] h-[49px] rounded-full bg-backgroud top-[154px]  sm:left-[34px] left-[14px] absolute z-10">
              <h2 className="text-center font-Nunito text-3xl pt-[7px]">2</h2>
            </div>
            <div className="w-[49px] h-[49px] rounded-full bg-backgroud top-[284px]  sm:left-[34px] left-[14px] absolute z-10">
              <h2 className="text-center font-Nunito text-3xl pt-[7px]">3</h2>
            </div>
            <div className="absolute bg-backgroud h-[207.5px] border-[2px] border-solid sm:left-[58.5px] left-[38.5px] top-[93.5px]"></div>
            <div className="sm:pl-28  pl-[92px] pt-[53px]">
              <h3 className="h-8 w-[266px] text-[22px] text-justify  font-bold font-Nunito">
                Your personal information
              </h3>
              <p className="text-base sm:w-[388px] h-10 font-Mulish">
                Your basic personal information help us to offert the better
                option to your case
              </p>
            </div>
            <div className="sm:pl-28  pl-[92px] pt-[36px]">
              <h3 className="h-8 w-72 text-[22px] text-justify font-bold font-Nunito">
                Up documentation
              </h3>
              <p className="text-base sm:w-[388px] h-10 font-Mulish">
                Your basic personal information help us to offert the better
                option to your case
              </p>
            </div>
            <div className="sm:pl-28  pl-[92px] pt-[58px]">
              <h3 className="h-8 w-72 text-[22px] text-justify font-bold font-Nunito">
                Date with our lawyers
              </h3>
              <p className="text-base sm:w-[388px] h-10 font-Mulish">
                Your basic personal information help us to offert the better
                option to your case
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:top-[841px] top-[904px] absolute w-full flex justify-center">
          <button className="bg-blue text-white sm:w-344  w-[208px] h-[55.92px] rounded-[10px] z-10 font-Mulish">
            Get Started
          </button>
        </div>
        <div className="bg-Grey h-[329px] w-full  z-0 top-[871px] absolute">
          <Image
            src={imgAbout}
            alt="Picture of the author"
            className="w-full h-[329px] z-10 absolute "
          />
        </div>
        <div className="sm:w-[237px] sm:h-[237px] rounded-full bg-white sm:bottom-[80px] absolute z-30 sm:left-[972px] hidden sm:block">
          <h3 className="text-blue font-Inter text-justify text-3xl top-[90px] absolute left-[77px]">
            Say,<br></br>Hello!
          </h3>
          <div className="sm:w-[57px] sm:h-[57px] rounded-full bg-blue top-[168px] absolute left-[164px]"></div>
        </div>
        <div className="bg-DarkBlue w-full h-[198px] top-[1016px] absolute z-0">
          <div className="rounded-full w-[56px] h-[56px] bg-white absolute top-[84px] left-[98px] hidden sm:inline"></div>
          <h3 className="text-white font-Inter text-base font-medium pt-[102px] pl-[160px] hidden sm:block">
            contact.forwork@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
};


export default index;
