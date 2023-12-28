import React from 'react'
import { useDispatch } from 'react-redux'

import {toggleMenu} from '../utils/appSlice'

function Head() {
  const dispatch= useDispatch();

  const toggleMenuHandler=()=>{

    dispatch(toggleMenu());


  }

  return (
    <div className='grid grid-flow-col shadow-md top-0 static'>
        <>
        <div className='flex'>
          
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[40px] h-[40px] m-4 cursor-pointer" onClick={toggleMenuHandler}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  <a href='/'> <img src='https://www.thefpsreview.com/wp-content/uploads/2020/11/yt-logo-black-background.jpg' alt='yt-logo'  className='h-[82px] w-[180px] m-1 mx-[-20px] bg-black'/></a>
</div>

<input type='text' placeholder='Search' className='rounded-full shadow-sm p-[10px] w-[515.8px] h-[30px]  mt-8 ml-[32px] border-black border-spacing-2 ring-0 ring-black bg-gray-900'/>

{/* {<DropdownMenuDemo />} */}

        </>
    </div> 
  )
}

export default Head