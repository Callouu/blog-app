import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-8 w-full bg-black px-8 md:px-[500px] flex justify-between text-sm md:text-md py-8'>
      <div className='flex flex-col text-white'>
        <p>Featured Blogs</p>
        <p>Most Viewed</p>
        <p>Readers Choice</p>
      </div>
      <div className='flex flex-col text-white'>
        <p>Plans</p>
        <p>Support</p>
        <p>Recent Posts</p>
      </div>
      <div className='flex flex-row text-white place-items-center place-content-center space-x-4'>
        <p><AiFillGithub /></p>
        <p><AiFillLinkedin/></p>
        <p><AiFillTwitterCircle/></p>
      </div>
    </div>
  )
}

export default Footer