"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import '../../node_modules/quill/themes/snow'
import '../../node_modules/react-quill/dist/quill.snow.css'

export const metadata = {
    "title": 'Create a Post',
    "description": 'New Post'
}

const page = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFiles] = useState('');
    const [content, setContent] = useState('');
    const [res, setRes] = useState(null)

    async function createNewPost(e) {
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        e.preventDefault()
        const response = await fetch('http://localhost:8000/createpost', {
            method: 'POST',
            body: data,
            credentials: 'include'
        })
        const res = await response.json()
        setRes(res)
    }


    return (
        <>
            <h1 className='text-center my-10 font-bold text-gray-300 text-2xl'>Create a new Post...</h1>
            <form className='w-8/12 mx-auto flex flex-col items-start' onSubmit={createNewPost} >
                <input type="title"
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='text-5xl font-bold my-3 px-2 placeholder:text-gray-300 focus:outline-none' />

                <input type="summary"
                    placeholder='Summary'
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                    className='text-3xl font-semibold my-3 px-2 placeholder:text-gray-300 focus:outline-none' />

                <input type="file"
                    onChange={e => setFiles(e.target.files)}
                    className='my-3 px-2 placeholder:text-gray-300'
                />

                <ReactQuill theme='snow'
                    className='w-full mx-auto my-6 px-2'
                    value={content}
                    onChange={setContent}
                />
                <input type="submit" className='px-3 py-2 bg-gray-400 mx-2 my-4 rounded-md' />

            </form>
        </>
    )
};

export default page;
