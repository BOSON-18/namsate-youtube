import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {closeMenu} from '../utils/appSlice'
import ReactPlayer from 'react-player/youtube';


import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  let[searchParams]= useSearchParams();
  console.log(searchParams.get("v"))

  const dispatch= useDispatch();
 
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='px-5 flex flex-col h-screen '>

{/* <iframe width="1000" height="500"  src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`} title="YouTube video player" frameborder="0" allow='autoplay'   allowfullscreen className='rounded-lg'></iframe> */}
<ReactPlayer
        url={`https://www.youtube.com/watch?v=${searchParams.get("v")}`}
        playing
        controls
        width="1000px"
        height="500px"
        className='rounded-lg'
        title="YouTube video player"
        autoplay
      />
    </div>
  )
}

export default WatchPage