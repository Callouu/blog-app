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
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>Message text test</h1>
                    <div className='flex items-center justify-center space-x-2'>
                        <p><PiNotePencilBold /></p>
                        <p><BsFillTrashFill /></p>
                    </div>
                </div>
                <div className='flex items-center justify-between mt-2 md:mt-4'>
                    <p>@callou</p>
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
                <div>
                    <div className=''></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostDetails