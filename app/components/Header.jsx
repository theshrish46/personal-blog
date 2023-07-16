import Link from 'next/link';
import React from 'react';
import { BsPersonFill, BsSunFill } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className='px-4 my-4 w-full flex justify-between items-center'>
        <Link href={'/'}>Shrish</Link>

        <div className='flex justify-center items-center'>
          <Link href={'/login'} className='text-black mr-4'>
            <BsPersonFill />
          </Link>
          <BsSunFill className='ml-4'/>
        </div>
      </div>
    </>
  );
};

export default Header;
