
import React from 'react'



const NavBar = () => {
  return (
    <header className="flex justify-between p-11">
        <h1 className='font-bold text-[30px] '>resimex</h1>
      <nav className='flex justify-center text-[16px] font-medium'>
        <a href="/" title="Home" className='mr-4'>Home</a>
        <a href="/HomeApli" title="Testimonies" className='mx-4' >Testimonies</a>
        <a href="/Contacts" title="Contacts" className='ml-4'>Contacts</a>
      </nav>
      <button className='inline-flex items-center px-3 py-2 text-[16px] font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get started</button>
    </header>
  );
}

export default NavBar