import React from 'react'
import Button from './Button'

const arr=["All","Sports","Music","Valorant","Js","StandUp","WWE","Movies","Gym","ClumsyShots","Cooking"]
const ButtonsList = () => {
  return (
    <div className='grid grid-flow-col bg-black' >
      {arr.map((item,index)=>(
      <Button key={index} name={item}/>
      ))}
    </div>
  )
}

export default ButtonsList