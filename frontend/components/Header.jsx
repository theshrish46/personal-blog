'use client';

import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { BsPersonFill, BsSunFill } from 'react-icons/bs';
import { UserContext } from './UserContext';

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(async () => {
    const res = await fetch('http:/localhost:8000/profile')
    const userInfo = await res.json()
    console.log(userInfo)
    setUserInfo(userInfo)
  }, [])

  function logout() {
    fetch('http://localhost:8000/logout', {
      method: 'POST'
    })
    setUserInfo(null)
  }

  const username = userInfo?.username

  return (
    <>
      <div className='px-4 my-4 w-8/12 mx-auto flex justify-between items-center text-xl font-semibold'>
        <Link href={'/'}>Bloggey</Link>

        <div className='flex justify-center items-center'>
          {
            username && (
              <>
                <Link href={'/create'}>Create a new Post</Link>
                <div className='text-2xl'>{username}</div>
                <a onClick={logout}>Logout</a>
              </>

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

          <BsSunFill className='ml-4' />
        </div>
      </div>
    </>
  );
};

export default Header;
