import React from 'react'

const ProfilePosts = () => {
  return (
      <div>
          <div className='w-full flex mt-8 space-x-4'>
              {/* Left */}
              <div className='w-[35%] h-[200px] flex justify-center items-center'>
                  <img src='https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg' alt='' className='h-full w-full object-cover'></img>

              </div>

              {/* Right */}
              <div className='flex flex-col w-[65%]'>
                  <h1 className='text-xl font-bold md:mb-2 md:text-2xl'>Message text test</h1>
                  <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
                      <p>@callou</p>
                      <div className='flex space-x-2'>
                          <p>01/01/2023</p>
                          <p>15:02</p>
                      </div>
                  </div>
                  <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit nesciunt suscipit consequatur facere, illum eos labore tempora at cum! Neque ratione blanditiis perferendis quae aliquam voluptate asperiores quas commodi?</p>
              </div>
          </div>
      </div>
  )
}

export default ProfilePosts