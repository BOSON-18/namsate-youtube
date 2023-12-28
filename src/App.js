import React from 'react'
import Head from './Components/Head'
import Body from './Components/Body'
import { Provider } from 'react-redux'
import store from './utils/Store'
import SideBar from './Components/SideBar'
import MainVideo from './Components/MainVideo'
import WatchPage from './Components/WatchPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const App = () => {

  const approuter= createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainVideo/>
      },
      {
        path:'/watch',
        element:<WatchPage/>
      }
    ]
  }])
  return (

    <Provider store={store}>
    <div className='text-white bg-black'>
      <Head/>
      <RouterProvider router={approuter}/>
    
    </div>
    </Provider>
  )
}

export default App 