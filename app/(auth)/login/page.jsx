"use client"
import React, { useState } from 'react'

const page = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [res, setRes] = useState({})

    async function login(e) {
        e.preventDefault()
        const res = await fetch('http://localhost:8000/login', {
            method: 'PUT',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        const resJ = await res.json()
        setRes(resJ)
    }
    return (
        <>
            <div className='w-4/12 h-80 rounded-lg shadow-lg shadow-gray-400 mx-auto flex justify-center items-center'>
                <form
                    className='flex justify-center items-center flex-col gap-5'
                    onSubmit={login}
                >
                    <h2 className='text-2xl'>Login</h2>
                    <input
                        className='bg-gray-200 px-3 py-2 rounded-md placeholder:text-black'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />

                    <input
                        className='bg-gray-200 px-3 py-2 rounded-md placeholder:text-black'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className='bg-gray-500 px-3 py-2 rounded-md text-white'>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default page