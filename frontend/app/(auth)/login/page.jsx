'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function login(e) {
    e.preventDefault();
    const resposne = await fetch('http://localhost:8000/loginpage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password }),
      credentials: 'include',
    });
    const data = await resposne.json();
    console.log(data);
    router.push('/');
  }

  return (
    <>
      <div className='w-4/12 mx-auto h-80 my-10'>
        <form className='flex flex-col' onSubmit={login}>
          <input
            type='text'
            placeholder='User Name'
            className='border-gray-300 border-2 px-2 py-3 my-5 rounded-lg placeholder:text-gray-600'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Password'
            className='border-gray-300 border-2 px-2 py-3 my-5 rounded-lg placeholder:text-gray-600'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='submit'
            className='border-gray-300 border-2 px-2 py-3 rounded-lg text-white my-5 bg-gray-600'
          />
        </form>
      </div>
    </>
  );
};

export default page;
