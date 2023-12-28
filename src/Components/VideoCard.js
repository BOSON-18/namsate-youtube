import React from 'react'

const VideoCard = ({info}) => {

    console.log(info);//debug checking if info get passed

    const {snippet,statistics}= info;
    console.log(snippet)
   const {channelTitle,title,thumbnails}= snippet;
  return (
    <div className='flex shadow-sm ring-white bg-black text-white'>
        <div className='flex flex-col w-72 m-5   rounded-lg'>
        <img src={thumbnails.high.url} alt='video' className='w-72 h-100 rounded-2xl' / >
            <ul className='text-pretty'>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{(statistics.viewCount/1000000).toString().slice(0,3)}M views</li>
            </ul>
            </div>
    </div>
  )
}

export default VideoCard