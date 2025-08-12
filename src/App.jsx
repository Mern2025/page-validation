import React from 'react'
import app from './firebaseconfig'
import './assets/App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import Registration from './pages/Registration'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route>
        <Route path='/' element={<LayoutOne/>}/>
        <Route index element={<Home/>}/>
      </Route>

    <Route path='/registration' element={<Registration/>}/>
    <Route path='/login' element={<Login/>}/>
  </Route>
))

  return (
    <>
      <ToastContainer />
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App