import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center fixed bottom-0 left-0 my-4'>
        <Link href={'/'} className='mx-4'>
          <BsTwitter />
        </Link>
        <Link href={'/'} className='mx-4'>
          <BsLinkedin />
        </Link>
        <Link href={'/'} className='mx-4'>
          <BsGithub />
        </Link>
      </div>
    </>
  );
};

export default Footer;
