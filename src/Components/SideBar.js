import React from 'react'


import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function SideBar() {

  const store = useSelector((store) => store); // Log the entire state
  console.log("Redux Store:", store);


  const isMenuOpen= useSelector((store)=>store.app.isMenuopen)
  console.log("isMenuOpen:", isMenuOpen)
  //Early rendering
  //if(!isMenuOpen) return null;
  return !isMenuOpen ? null: (

    <div className='p-5 shadow-lg col-span-1 w-48 static'>


<ul className=''>
  <Link to="/"> <li>
    Home
  </li></Link>
  <li>Shorts</li>
  <li>Subscriptions</li>
</ul>

<h2 className='my-3 text-2xl '>You</h2>
<ul className=''>
  <li>
    Home
  </li>
  <li>Shorts</li>
  <li>Subscriptions</li>
</ul>

<h2 className='my-3 text-2xl'>Explore</h2>
<ul className='' >
  <li>
    Home
  </li>
  <li>Shorts</li>
  <li>Subscriptions</li>
</ul>
    </div>
  )
}

export default SideBar