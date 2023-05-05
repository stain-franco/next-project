import Image from 'next/image';
import Link from 'next/link';
import flagMexico from '../../public/images/emojione-v1_flag-for-mexico.svg';
const login = () => {
  return (
    <>
      <header className="max max-w-screen-xl mx-auto h-24 xs:flex xs:justify-start xs:items-center xs:p-8 xs:gap-3">
        <h1 className="font-bold text-2xl">resimex</h1>
        <Image src={flagMexico} alt="logo" width={30} />
      </header>
      <main className="max-w-screen-xl mx-auto">
        <section className="xs:p-8 sm:max-w-[600px] mx-auto mb-5">
          <h2 className="font-semibold text-2xl text-DarkBlue">
            Create an account
          </h2>
          <span>And start your trip safely with us.</span>
          <form className="w-full mx-auto rounded-md pt-9 mb-12">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your email{''}
                <span className="text-color text-red-600">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300  focus:outline-none focus:border-indigo-500"
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
              ></input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Create username{''}
                <span className="text-color text-red-600">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your username"
              ></input>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password{''}
                <span className="text-color text-red-600">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              ></input>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                ></input>
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-normal text-gray-400">
                  By creating an account you are agreeing to our Terms and
                  Conditions and Privacy Policy
                </label>
              </div>
            </div>
            <button
              className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
          <Link href="/" className="underline block text-center">
            Already have a member?
            <span className="text-blue"> login</span>
          </Link>
        </section>
        <div className="xs:w-full xs:h-[25.125rem] xs:relative xs:overflow-hidden xs:-z-10">
          <div className="xs:w-full xs:h-[435px] xs:absolute xs:-bottom-12 xs:skew-y-3 bg-cyan-500"></div>
          <div className="flex gap-8 p-6 relative z-10 top-[15%] justify-evenly">
            <div className="bg-emerald-500 min-w-[10.1875rem] min-h-[16.1875rem]">
              IMAGE
            </div>
            <blockquote className="flex flex-col justify-center gap-4 sm:max-w-[250px]">
              <p>
                “This product allows you to collaborate, experiment, and test
                much more effectively and efficiently.”
              </p>
              <footer>John connor</footer>
              <span>dinamarca</span>
            </blockquote>
          </div>
        </div>
      </main>
    </>
  );
};

export default login;

{
  /* <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="John Doe">
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com">
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password" placeholder="********">
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********">
      </div>
      <button
        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit">Register</button>
    </form> */
}

{
  /* <section>
<h2 className="font-semibold text-3xl">Create an account</h2>
<span>And start your trip safely with us.</span>
<form>
  <label htmlFor="">Your email</label>
</form>
</section> */
}
