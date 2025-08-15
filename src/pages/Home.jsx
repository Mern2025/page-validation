import React from 'react'
import MessageUserList from '../components/MessageUserList'
import MessageBox from '../components/MessageBox'

const Home = () => {
  return (
    <>
       <div className='flex'>
           <MessageUserList/>
           <MessageBox/>
       </div>
    </>
  )
}

export default Home