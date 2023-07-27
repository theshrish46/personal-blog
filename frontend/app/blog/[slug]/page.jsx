import React from 'react'
import { data } from './../../../data/data'

const page = ({ params }) => {
    return (
        <>
            <div className='w-7/12 mx-auto my-10'>
                {
                    data.filter(item => item.id == params.slug).map(post => (
                        <div>
                            <h2 className='text-gray-500 text-5xl my-4'>{post.title}</h2>
                            <span className='text-gray-400 my-4 text-base'>{post.slug}</span>
                            <p className='text-gray-800 my-4 leading-8 text-xl text-justify'>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default page