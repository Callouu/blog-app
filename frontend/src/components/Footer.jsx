import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <div className='mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 '>
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

    </div>
    <div className='flex flex-row text-white place-items-center place-content-center space-x-4 bg-black'>
        <p><AiFillGithub /></p>
        <p><AiFillLinkedin/></p>
        <p><AiFillTwitterCircle/></p>
      </div>
    <p className='py-2 pb-2 text-center text-white bg-black'>Created with MongoDB - Express.JS - React - Node - Tailwindcss</p>
    </>
  )
}

export default Footer