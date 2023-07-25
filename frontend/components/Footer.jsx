import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center text-2xl sticky bottom-0 left-0 my-6'>
        <Link
          href={'/'}
          className='mx-4 hover:text-blue-500 transition-all duration-150 ease-linear'
        >
          <BsTwitter />
        </Link>
        <Link
          href={'/'}
          className='mx-4 hover:text-blue-700 transition-all duration-150 ease-linear'
        >
          <BsLinkedin />
        </Link>
        <Link
          href={'/'}
          className='mx-4 hover:text-gray-500 transition-all duration-150 ease-linear'
        >
          <BsGithub />
        </Link>
      </div>
    </>
  );
};

export default Footer;
