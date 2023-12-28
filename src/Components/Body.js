import React from 'react'
import SideBar from './SideBar'
import MainVideo from './MainVideo'
import { Outlet } from 'react-router-dom'



export default function Body() {
  return (
    <div className='grid grid-flow-col overflow-x-hidden '>
        <SideBar/>
        <Outlet/>
       
        
    </div>
  )
}
