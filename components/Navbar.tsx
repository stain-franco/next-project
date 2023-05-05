
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



const NavBar = () => {
  return (
    <header className="flex justify-between items-center p-11 bg-backgroud w-full">
        <div className='flex items-center '>
        <h1 className='font-bold text-[30px] pr-[15px]'>resimex</h1>
        <Image
              src="/images/emojione-v1_flag-for-mexico.svg"
              alt="Picture of the author"
              className="w-[35px] h-[35px] left-[220px] top-[45px]"
              width={35}
              height={35}
              
              // fill para cubirir toda la pantalla
            />
        </div>
      <nav className=' justify-center text-[16px] font-medium sm:block hidden'>
        <Link href="/" title="Home" className='mr-4'>Home</Link>
        <Link href="/HomeApli" title="Testimonies" className='mx-4' >Testimonies</Link>
        <Link href="/Contacts" title="Contacts" className='ml-4'>Contacts</Link>
      </nav>
      <button className=' items-center px-3 py-2 text-[16px] font-medium text-center text-white bg-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue dark:hover:bg-DarkBlue dark:focus:ring-blue-800 sm:block hidden'>Get started</button>
    </header>
  );
}

export default NavBar