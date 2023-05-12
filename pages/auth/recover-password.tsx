const recoverPassword = () => {
  return (
    <div className="  bg-white  relative w-full m-0 flex justify-center flex-wrap container h-[750px]">
      <div className=" w-1280">
      <div className="bg-backgroud absolute sm:left-[96px] left-[32px]">
        <h1 className="text-3xl font-Nunito font-bold  absolute sm:top-[38px] top-[23px]">
          resimex
        </h1>
      </div>
      <div className="w-1280 flex justify-center flex-wrap">
      <div className="mt-[132px] sm:top-[132px] w-[502px] h-[351px] border border-blue rounded flex flex-wrap justify-center">
          <h2 className="font-Nunito text-[22px] font-bold w-full text-center h-[30px] mt-[51px]">Reset Password</h2>
        <p className=" absolute top-[222px] font-Mulish text-center text-Grey text-[16px] w-[255px] h-[40px]">We send a link to reset you password to your email</p>
      <h4 className="absolute text-[12px] font-Mulish ml-[-280px] mt-[166px] w-[65px]">Your email*</h4>
        <div>
          <input type='text' placeholder=" Enter you email" className="block w-[350px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-Ligthgray"/>
        </div>
      <button className="absolute sm:top-[391px]  bg-blue/40 text-white w-[350px] h-[36px]">SEND EMAIL</button>
      </div>
      <h3 className="absolute top-[504px] text-Grey font-[12px] text-center w-full">Or Don t have an account? <span className="text-blue">Sign Up!</span></h3>
      
    </div>
      </div>
      <div className="bg-backgroud w-full h-[111px] bottom-0 absolute m-0"></div>
    </div>
  );
};

export default recoverPassword;
