'use client';

import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { BsPersonFill, BsPersonFillLock, BsPlusCircle, BsSunFill } from 'react-icons/bs';
import { UserContext } from './UserContext';
import { compareSync } from 'bcryptjs';

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:8000/profile', { credentials: 'include' })
      .then(res => res.json()).then(item => setUserInfo(item))
  }, [])

  async function logout() {
    fetch('http://localhost:8000/logout', {
      method: 'POST'
    })
    setUserInfo(null)
  }

  const username = userInfo?.userName

  return (
    <>
      <div className='px-4 my-4 w-11/12 mx-auto flex justify-between items-center text-xl font-semibold'>
        <Link href={'/'}>Bloggey</Link>

        <div className='flex justify-around items-center'>
          {
            username && (
              <div className='flex justify-center items-center'>
                <Link href={'/create'} className='text-xs mx-2'>
                  <BsPlusCircle className='text-xl' />
                </Link>
                <div className='text-base mx-2 cursor-pointer'>{username}</div>
                <a onClick={logout} className='mx-2 text-sm cursor-pointer'>
                  <BsPersonFillLock className='text-xl cursor-pointer' />
                </a>
              </div>

            )
          }

          {!username && (
            <>
              <div className='mx-4'>
                <Link href={'/login'}>Login</Link>
              </div>
              <div className='mx-4'>
                <Link href={'/register'}>Register</Link>
              </div>
            </>
          )}

          {/*  */}

          {/* <Link href={'/login'} className='text-black mr-4'>
            <BsPersonFill />
          </Link> */}

          <BsSunFill className='ml-4 cursor-pointer' />
        </div>
      </div>
    </>
  );
};

export default Header;
