import React from 'react'
import { Link } from 'react-router'
import { LuMessageSquare } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { TbUserOff } from "react-icons/tb";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const currentUserInfo = useSelector((state)=>state.currentUserInfo.value)
  
  console.log(currentUserInfo)

  return (
    <>
        <nav className='px-4 py-4 border-r-gray-300 bg-gray-200 flex flex-col items-center justify-between'>
           <div className='flex flex-col gap-5 text-lg'>
                 <Link to="/" className='text-lg font-semibold text-gray-800 hover-text-blue-600 transition-colors'><LuMessageSquare/></Link>
                 <Link to="/" className='text-lg font-semibold text-gray-800 hover-text-blue-600 transition-colors'><FaRegUser /></Link>
                 <Link to="/" className='text-lg font-semibold text-gray-800 hover-text-blue-600 transition-colors'><TbUserOff /></Link>
           </div>

           <div className='profile'>
                <div className='w-10 h-10 bg-gray-300 rounded-full overflow-hidden'><img src={currentUserInfo?.photoURL} alt="" /></div>
                <h2 className='text-[14px] font-normal text-black'>{currentUserInfo?.displayName}</h2>
           </div>
        </nav>
    </>
  )
}

export default Navbar