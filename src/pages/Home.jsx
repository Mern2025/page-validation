import React from 'react'
import MessageUserList from '../components/MessageUserList'
import MessageBox from '../components/MessageBox'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
       <div className='flex flex1'>
           <Navbar/>
           <MessageUserList/>
           <MessageBox/>
       </div>
    </>
  )
}

export default Home