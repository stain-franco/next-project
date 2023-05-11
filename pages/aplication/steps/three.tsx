import Image from 'next/image';
import Link from 'next/link';
import flagMexico from '../../../public/images/emojione-v1_flag-for-mexico.svg';
import iconEmail from '../../../public/images/iconEmail.svg';
const three = () => {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <header className="w-full xs:h-12 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3 lg:p-5 bg-backgroud lg:py-8 lg:px-20">
        <h1 className="font-bold text-2xl">resimex</h1>
        <Image src={flagMexico} alt="logo" width={30} />
      </header>
      <div className="w-full xs:h-12 lg:h-14 self-end relative overflow-hidden mb-5">
        <div className="xs:-skew-y-3 sm:-skew-y-2 lg:-skew-y-1 bg-backgroud w-full h-12 absolute xs:-top-4 sm:-top-6 md:-top-6"></div>
      </div>
      <Link href="/" className="xs:ml-5 underline text-blue">
        {`<Back to home`}
      </Link>
      <h1 className="font-Nunito font-bold text-3xl xs:mt-5 xs:text-center md:text-left sm:ml-[8%] sm:text-left lg:ml-[15%]">
        Check out
      </h1>
      <div className="md:flex md:justify-center">
        {/* <!-- component --> */}
        <div className="xs:my-7 xs:mx-3 flex items-center justify-center xs:p-9 shadow-md xs:border-2 xs:border-Lightgray rounded-md md:w-full lg:max-w-2xl">
          {/* formulario */}
          <form className="mx-auto w-full max-w-[550px] font-Mulish">
            <strong className="block text-right underline text-blue mb-10">{`<Edit`}</strong>
            {/* 1 */}
            <div className="mb-5">
              <label
                htmlFor="lName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Legal Name
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* 2 3*/}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Your Nationality
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Your Residence
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* 4..5 */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-2/3">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Residence address
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/3 ">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Post Code
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* 678 */}
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/3">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Your Gender
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/3 ">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date of birth
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/3 ">
                <div className="mb-5">
                  <label
                    htmlFor="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder=""
                    className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            {/* 9 */}
            <div className="mb-5">
              <label
                htmlFor="lName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* 10 */}
            <div className="mb-12">
              <label
                htmlFor="lName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Your job
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder=""
                className="w-full rounded-md border border-[#e0e0e0] bg-Ligthgray py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* 11 */}
            <div className="mb-5">
              <h1 className="mb-3 block text-base font-medium text-[#07074D]">
                Upload front to your Passport
              </h1>
              <div className="w-[129px] h-[65px] bg-slate-700"></div>
            </div>
            {/* 12 */}
            <div className="mb-5">
              <h1 className="mb-3 block text-base font-medium text-[#07074D]">
                Upload back to your Passport
              </h1>
              <div className="w-[129px] h-[65px] bg-slate-700"></div>
            </div>
            {/* submit */}
            <div>
              <button className="hover:shadow-form rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none w-full md:hidden">
                SAVE AND PAY
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-[350px] xs:hidden md:block md:mr-3 md:mt-10">
          <div className="bg-gray-400 w-[285px] h-[343px] mb-7"></div>
          <div>
            <button className="hover:shadow-form rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none w-full">
              SAVE AND PAY
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-DarkBlue xs:py-6 xs:px-8 xs:flex xs:justify-between xs:items-center">
        <div className=" md:flex md:items-center md:gap-2">
          <Image src={iconEmail} alt="iconEmail"></Image>
          <span className="xs:hidden md:inline text-White">
            contact.forwork@gmail.com
          </span>
        </div>
        <ul className="xs:text-right xs:flex xs:flex-col xs:gap-2 text-White underline sm:flex-row sm:gap-4">
          <li>Terms and Condition</li>
          <li>Privacy polity</li>
          <li>All right reserved</li>
        </ul>
      </footer>
    </div>
  );
};

export default three;
