'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function register(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/user-register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, userEmail, password }),
      credentials: 'include',
    });
    router.push('/');
  }
  return (
    <>
      <div className='w-4/12 mx-auto h-80 my-10'>
        <form className='flex flex-col' onSubmit={register}>
          <input
            type='text'
            placeholder='Name'
            className='px-2 py-3 my-4 border-gray-300 border-2 rounded-lg placeholder:text-gray-600'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            className='px-2 py-3 my-4 border-gray-300 border-2 rounded-lg placeholder:text-gray-600'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='px-2 py-3 my-4 border-gray-300 border-2 rounded-lg placeholder:text-gray-600'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='submit'
            className='px-2 py-3 my-4 rounded-lg bg-gray-600 outline-none'
          />
        </form>
      </div>
    </>
  );
};

export default page;
