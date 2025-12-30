import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Portflio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
   
const routes = createBrowserRouter([
  {
    path:'/' , element:<Layout/>, children:[
      {
        index:true , element:<Home/>
      },
      {
      path: 'about' , element:<About/>
      },
      {
      path: 'portfolio' , element:<Portflio/>
      },
      {
      path: 'contact' , element:<Contact/>
      }
    ]
  }
])

  return (
    <RouterProvider router={routes}/>

  )
}

export default App
