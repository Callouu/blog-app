import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProfilePosts from '../components/ProfilePosts'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='flex md:flex-row px-8 md:px-[200px] mt-8 flex-col-reverse'>
        <div className='flex flex-col md:w-[70%] w-full'>
          <h1 className='text-xl font-bold'>Your posts:</h1>
          <ProfilePosts />
        </div>
        <div className='flex flex-col space-y-4 md:w-[30%] w-full md'>
          <h1 className='text-xl font-bold'>Profile</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile