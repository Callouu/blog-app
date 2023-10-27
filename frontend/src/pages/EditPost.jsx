import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ImCross } from 'react-icons/im'

const EditPost = () => {

    const [cat, setCat] = useState ("")
    const [cats, setCats] = useState ([])
    
    const addCategory = () => {
      let updatedCats = [...cats]
      updatedCats.push(cat)
      setCat("")
      setCats(updatedCats)
    }
  
    const deleteCategory = (i) => {
      let updatedCats = [...cats]
      updatedCats.splice(i)
      setCats(updatedCats)
    }


  return (
    <div>
    <Navbar />
    <div className='px-6 md:px-[200px] mt-8'>
      <h1 className='font-bold text-xl md:text-2xl'>Update a post</h1>
      <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4 '>
        <input type='text' placeholder='Enter post title' className='w-[50%] px-4 py-2 outline-none border-solid border-2 border-gray-200 rounded-md'></input>
        <input type='file' placeholder='' className='px-4'></input>
        <div className='flex flex-col'>
          <div className='flex items-center space-x-4 md:space-x-8'>
            <input value={cat} onChange={(e) => setCat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type='text'></input>
            <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
          </div>
          {/* categories */}
          <div className='flex px-4 mt-3'>
            {cats?.map((c,i) => (
              <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p>{c}</p>
                <p onClick={deleteCategory} className='cursor-pointer hover:text-red-500'><ImCross /></p>
              </div>
            ))}
          </div>
        </div>
        <textarea rows={15} cols={30} className='px-4 py-2 outline-none border-solid border-2 border-gray-200 rounded-md' placeholder='Write your description..'></textarea>
        <button className='bg-black w-full md:w-[20%] mx-auto font-semibold text-white px-4 py-2 md:text-xl text-lg uppercase'>Update</button>
      </form>
    </div>
    <Footer />
  </div>
  )
}

export default EditPost