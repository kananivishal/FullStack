import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Course from './components/Course'
import Report from './components/Report'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: '/dashboard',
    element: <div>
      <Navbar />
      <Dashboard />
    </div>,
    children: [{
      path: 'course',
      element: <Course />
    }, {
      path: 'report',
      element: <Report />
    }]
  },
  {
    path: '/about',
    element: <div>
      <Navbar />
      <About />
    </div>
  }
])

function App() {


  return (
    <>
      <div>
        <h1>This Is App</h1>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
