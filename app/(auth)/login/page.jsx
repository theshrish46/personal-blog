"use client"
import React, { useState } from 'react'

const page = () => {
    const [name, SetName] = useState('');
    const [pass, setPass] = useState('')
    

    return (
        <div className='w-10/12 mx-auto flex justify-center items-center'>
            <form className='flex justify-center items-center flex-col gap-5'>
                <input className='bg-gray-200 px-3 py-2 rounded-md placeholder:text-black' type="text" name="name" placeholder='Name' value={name}/>
                
                <input className='bg-gray-200 px-3 py-2 rounded-md placeholder:text-black' type="password" name="password" placeholder='Password' value={pass} />
                
                <button onSubmit={handleClick} className='bg-gray-500 px-3 py-2 rounded-md text-white'>Submit</button>
            </form>
        </div>
    )
}

export default page
