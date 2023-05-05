import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-DarkBlue flex  pl-[98px]  justify-between h-[198px] m-auto">
      <div className='flex items-center pt-[40px] pb-[40px]'>
      <div className="bg-white rounded-full w-[55px] h-[55px] flex flex-col justify-center items-center">
        <Image
          src="/images/Vector(1).png"
          alt="Picture of the author"
          className="" 
          width={25}
          height={20}
        />
      </div>

      <p className="font-medium text-[16px] leading-[19.36px] w-[216px] h-[19px] text-white ml-[10px] sm:block hidden">
        contact.forwork@gmail.com
      </p>
      </div>
      <div className='flex flex-col justify-center mr-[23px] text-white sm:hidden'>
      <Link href="/" title="Home" className='mr-4'>Terms and Condition</Link>
      <br />
      <Link href="/" title="Home" className='mr-4'>Privacy polity</Link>
      <br />
      <Link href="/" title="Home" className='mr-4'>All right reserved</Link>
      </div>
    </div>
  );
};

export default Footer;
