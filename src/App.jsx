import React from 'react'
import app from './firebaseconfig'
import './assets/App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './layouts/LayoutOne'
import Registration from './pages/Registration'

const App = () => {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>

  <Route path='/registration' element={<Registration/>}>

  </Route>

  </Route>
))

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App