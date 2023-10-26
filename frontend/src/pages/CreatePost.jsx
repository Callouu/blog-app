import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CreatePost = () => {
  return (
    <div>
        <Navbar />
        <div className='px-6 md:px-[200px] mt-8'>
            <h1 className='font-bold text-xl md:text-2xl'>Create a post</h1>
            <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                <input type='text' placeholder='Enter post title' className='px-4 py-2 outline-none'></input>
                <input type='file' placeholder='' className='px-4 py-2 outline-none'></input>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default CreatePost