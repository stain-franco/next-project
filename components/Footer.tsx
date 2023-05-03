import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-DarkBlue flex pt-[102px] pb-[77px] pl-[98px] items-center">
      <div className='bg-white rounded-full w-[55px] h-[55px] flex flex-col justify-center items-center'>
      <Image
        src="/images/Vector(1).png"
        alt="Picture of the author"
        className="" //left-[2.5px] top-[5px] m-[5px] bg-white p-[5px] rounded-full w-[55px]
        width={25}
        height={20}
      />
      </div>
      
      <p 
        className="font-medium text-[16px] leading-[19.36px] w-[216px] h-[19px] text-white ml-[10px]">
        contact.forwork@gmail.com
      </p>
    </div>
  );
};

export default Footer;
