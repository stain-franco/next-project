import Image from 'next/image';
import Link from 'next/link';

const stepTwo = () => {
  return (
    <div className="m-auto">
      <header className="w-full xs:h-12 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3 lg:p-5 bg-backgroud lg:py-8 lg:px-20">
        <h1 className="font-bold text-2xl">resimex</h1>
        <Image
          src="/images/emojione-v1_flag-for-mexico.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </header>
      <div className="w-full xs:h-12 lg:h-14 self-end relative overflow-hidden mb-5">
        <div className="xs:-skew-y-3 sm:-skew-y-2 lg:-skew-y-1 bg-backgroud w-full h-12 absolute xs:-top-4 sm:-top-6 md:-top-6"></div>
      </div>
      <div className="">
        <Link href="/" className="xs:ml-5 underline text-blue">
          {`<Back`}
        </Link>
        <h1 className="font-bold text-DarkBlue  w-[585px] h-[35px] text-center text-[32px]">
          Upload your documentation
        </h1>
      </div>
      <main className="flex items-center justify-center ">
        <div className=" flex flex-col justify-center items-center w-[665px] h-[595px] py-[50px] px-[58px] bg-white border border-gray-200 rounded-[10px] mb-[84px] mt-[46px]">
          <p className="text-end pr-[328px]">Upload front to your Passport</p>
          <div className="flex flex-col items-center justify-center ">
            <label className="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed  cursor-pointer bg-white ">
              <div className="flex flex-col items-center justify-center w-[548px] h-[104px] px-[40px] py-[16px]">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Upload Additional file</span>
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              Attach file. File size of your documents should not exceed 10MB
            </p>
          </div>
          <p className="text-end pr-[328px]">Upload front to your Passport</p>
          <div className="flex flex-col items-center justify-center ">
            <label className="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed  cursor-pointer bg-white ">
              <div className="flex flex-col items-center justify-center w-[548px] h-[104px] px-[40px] py-[16px]">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Upload Additional file</span>
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <p className=" text-sm text-gray-500 dark:text-gray-400">
              Attach file. File size of your documents should not exceed 10MB
            </p>
          </div>
          <div className="w-full  items-center ">
            <div className="mt-8">
              <div className="col-span-6">
                <label
                  htmlFor="MarketingAccept"
                  className="flex gap-[12px] justify-center py-[35px]"
                >
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className=" w-5  border-gray-200 bg-white shadow-sm"
                  />
                  <span className="text-sm text-gray-700">
                    I want to protect my data by signing an NDA
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className=" text-[15.8px]  leading-[23.7px] bg-blue px-5 py-3 rounded-[12.64px] font-medium text-white w-full "
              >
                SAVE AND CONTINUE
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-[285px] h-[343px] py-[50px] px-[58px] border border-gray-200 rounded-[10px] mb-[84px] mt-[46px] bg-backgroud ml-[30px]">
          <h1 className="font-bold text-DarkBlue  w-[226px] h-[44px]  text-[20px] mb-[19px] ">
            Why is important this information?
          </h1>
          <p className='w-[233px] h-[200px] text-[16px] '> 
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements.<br/> We’ll assist you from
            start to ﬁnish, ensuring you have the insight and knowledge needed
            to succeed.
          </p>
        </div>
      </main>
      <div className="bg-DarkBlue flex  pl-[98px]  justify-between h-[198px] m-auto">
        <div className="flex items-center pt-[40px] pb-[40px]">
          <div className="bg-white rounded-full w-[55px] h-[55px] flex flex-col justify-center items-center ">
            <Image
              src="/images/Vector(1).png"
              alt="Picture of the author"
              className=""
              width={25}
              height={20}
            />
          </div>

          <p className="font-medium text-[16px] leading-[19.36px] w-[216px] h-[19px] text-white ml-[10px] ">
            contact.forwork@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-center mr-[23px]  text-white">
          <Link href="/" title="Home" className="mr-4">
            Terms and Condition
          </Link>
          <br />
          <Link href="/" title="Home" className="mr-4">
            Privacy polity
          </Link>
          <br />
          <Link href="/" title="Home" className="mr-4">
            All right reserved
          </Link>
        </div>
      </div>
    </div>
  );
};

export default stepTwo;
