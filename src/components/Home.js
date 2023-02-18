import React from 'react'
import { Note } from './Note'

export const Home = () => {
  return (
    <div className='w-[40vw] mx-auto rounded-lg my-4 p-4 '>
      <form>
        <fieldset className='border-2 p-3 rounded-lg'>
          <legend className='text-lg px-2 font-semibold'>Add a note</legend>
          <label for='title'>Title</label><br/>
          <input id='title' type="text" placeholder='Enter a title' className='bg-[#f9faff] w-full border-2 rounded-lg p-1 my-1 focus:outline-[#73c0b4]'/>
          <label for='title'>Description</label><br/>
          <input id='title' type="text" placeholder='Enter description' className='w-full bg-[#f9faff] border-2 rounded-lg p-1 my-1 focus:outline-[#73c0b4]'/>
          <label for='title'>Tag</label><br/>
          <input id='title' type="text" placeholder='Enter a tag' className='w-full bg-[#f9faff] border-2 rounded-lg p-1 my-1 focus:outline-[#73c0b4]'/>
          <button type='submit' className='w-[30%] block mx-auto mt-2 text-lg rounded-lg text-[#4e576b] bg-[#73c0b4]'>Add</button>
        </fieldset>
      </form>
      <div className='my-8'>
        <h2 className=' text-2xl font-semibold'>Your Notes : </h2>
        <Note/>
      </div>
    </div>
  )
}
