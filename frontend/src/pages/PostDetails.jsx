import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PiNotePencilBold } from 'react-icons/pi'
import { BsFillTrashFill } from 'react-icons/bs'

const PostDetails = () => {
    return (
        <div>
            <Navbar />
            <div className='px-8 md:px-[200px] mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>Title text test</h1>
                    <div className='flex items-center justify-center space-x-2'>
                        <p><PiNotePencilBold /></p>
                        <p><BsFillTrashFill /></p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-2 md:mt-4'>
                    <p>@username</p>
                    <div className='flex space-x-2'>
                        <p>01/01/2023</p>
                        <p>15:02</p>
                    </div>
                </div>
                <img src='https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg' className='w-full mx-auto mt-8' alt=''></img>
                <p className='mx-auto mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='flex items-center mt-8 space-x-4 font-semibold'>
                    <p>Categories :</p>
                    <div className='flex justify-center items-center space-x-2'>
                        <div className='bg-gray-300 rounded-lg px-3 py-1'>Categorie 1</div>
                        <div className='bg-gray-300 rounded-lg px-3 py-1'>Categorie 2</div>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
                    <div className='px-2 py-2 mt-2 bg-gray-200 rounded-lg my-2'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-bold text-gray-600'>pseudo</h3>
                            <div className='flex justify-center items-center space-x-4'>
                                <p className='text-gray-500 text-sm'>date</p>
                                <p className='text-gray-500 text-sm'>heure</p>
                                <p className='text-gray-600'><PiNotePencilBold /></p>
                                <p className='text-gray-600'><BsFillTrashFill /></p>
                            </div>
                        </div>
                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='px-2 py-4 mt-2 bg-gray-200 rounded-lg my-2'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-bold text-gray-600'>pseudo</h3>
                            <div className='flex justify-center items-center space-x-4'>
                                <p className='text-gray-500 text-sm'>date</p>
                                <p className='text-gray-500 text-sm'>heure</p>
                                <div className='flex items-center justify-center space-x-2'>
                                    <p className='text-gray-600'><PiNotePencilBold /></p>
                                    <p className='text-gray-600'><BsFillTrashFill /></p>
                                </div>
                            </div>
                        </div>
                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className='w-full flex flex-col mt-4 md:flex-row'>
                    <input type='text' placeholder='Write your comment..' className='  md:w-[80%] outline-none px-4 mt-4 md:mt-0'></input>
                    <button className='bg-black text-white px-4 py-2 md:w-[20%] rounded-lg mt-4 md:mt-0'>POST COMMENT</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostDetails