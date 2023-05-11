import Link from 'next/link';
import Image from 'next/image';
import imgAbout from "../../../public/images/Rectangle1Mariachi.png";

const StepOne = () => {
  return (
  <div className="mr-auto b bg-white h-[1214px] relative w-full">
    <div className='container'>
      <div className="bg-backgroud w-full h-[130px]">
        <h1 className="text-3xl font-Nunito font-bold  absolute sm:top-[38px] sm:left-[96px] top-[23px]">
          resimex
        </h1>
      </div>
      <div>
        <h4 className='top-[195px] left-[150px] absolute font-Mulish text-[12px] text-blue'>  Back to home</h4>
        <h2 className='font-Nunito font-bold text-[32px] absolute top-[229px] left-[149px] text-DarkBlue'>Your personal information</h2>

          <div className='w-[665px] h-[679px] border-backgroud border-solid ml-[150px] top-[302px] rounded-lg border-2 shadow-lg absolute'>

              <input placeholder='Legal Name' type="text" className='w-[548px] border-b-2 ml-[43px] mt-[91px] text-black '/>
              <input type="text" placeholder='Nationality' className='w-[282px] border-b-2 ml-[43px] mt-[36px] '/>
              <input type="text" placeholder='Your Gender' className='w-[242px] border-b-2 ml-[43px] mt-[36px] '/>
              <input placeholder='Your Residence' type="text" className='w-[548px] border-b-2 ml-[43px] mt-[36px] text-black '/>
              <input type="text" placeholder='Residence adress' className='w-[325px] border-b-2 ml-[43px] mt-[36px] '/>
              <input type="text" placeholder='Postcode' className='w-[167px] border-b-2 ml-[43px] mt-[36px] '/>
              <input placeholder='Contact Phone' type="text" className='w-[548px] border-b-2 ml-[43px] mt-[36px] text-black '/>
              <input placeholder='Email' type="text" className='w-[548px] border-b-2 ml-[43px] mt-[36px] text-black '/>
              <input type="text" placeholder='Your job' className='w-[282px] border-b-2 ml-[43px] mt-[36px] '/>
              <input type="text" placeholder='Date of birth' className='w-[242px] border-b-2 ml-[43px] mt-[36px] '/>
              <input placeholder='Any comments' type="text" className='w-[548px] border-b-2 ml-[43px] mt-[36px] text-black '/>
            <button className='bg-blue w-[548px] h-[56px] text-white rounded-md mt-[37px] ml-[43px]'>SAVE AND CONTINUE</button>
          </div>

          <div className='bg-backgroud w-[285px] h-[343px] rounded-lg shadow-lg absolute top-[302px] left-[845px] flex justify-center flex-wrap'>
            <h3 className='text-[22px] mt-[35px] text-DarkBlue font-bold w-[226px] h-[44px] font-Nunito leading-[22px]'>Help & frequency questions</h3>
            <p className='w-[233px] font-Mulish text-base  leading-5'>Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.
              <br /><br />
We ll assist you from start to ﬁnish, ensuring you have the insight and knowledge needed to succeed.
</p>
          </div>
      </div>
      <div className="bg-DarkBlue w-full h-[136px] bottom-0 absolute z-0">
          <div className="rounded-full w-[56px] h-[56px] bg-white absolute top-[51px] left-[98px] hidden sm:inline"></div>
          <h3 className="text-white font-Inter text-base font-medium pt-[65px] pl-[160px] hidden sm:block">
            contact.forwork@gmail.com
          </h3>
      </div>
    </div>
  </div>
  );
};

export default StepOne;
