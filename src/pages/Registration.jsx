import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from 'react-toastify';

const Registration = () => {

// ------------input field states
const [showPass, setShowPass] = useState(false)
const [userName, setUserName] = useState('')
const [userNameError, setUserNameError] = useState('')

const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState('')

const [phone, setPhone] = useState('')
const [phoneError, setPhoneError] = useState('')

const [password, setPassword] = useState('')
const [passwordError, setPasswordError] = useState('')

const [confirmPassword, setconfirmPassword] = useState('')
const [confirmPasswordError, setconfirmPasswordError] = useState('')

const auth = getAuth();

const handelSubmit =(e)=>{
    e.preventDefault()
    //  console.log(userName) setPhoneError('enter your phone number')
    // --------validation
     if(!userName) return setUserNameError ('please enter an user name')
     if(!email) return setEmailError('enter your email')
     if(!phone) return  setPhoneError('enter your phone number') 
     if(!password) return setPasswordError('enter your password')
     if(!confirmPassword) setconfirmPasswordError('enter your confirm password')
     if(password != confirmPassword) return setPasswordError('The password and confirm password do not match. Please try again.')
        
        // -------fire base auth part
        

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
       
       console.log(userCredential)

       toast('Registration Success', {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
});
    })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(error)
  });


}

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">Registration</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Welcome to Pingly!</p>

        <form onSubmit={handelSubmit}>
            <p className='text-[12px] text-red-500'>{userNameError}</p>
            {/* --user name --*/}
          <div className="mb-4">
            <input
             onChange={(e)=>{setUserName(e.target.value), setUserNameError()}}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        {/* --email -- */}
        <p className='text-[12px] text-red-500'>{emailError}</p>
          <div className="mb-4">
            <input
            onChange={(e)=>{setEmail(e.target.value), setEmailError()}}
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        {/* --- phone -- */}
        <p className='text-[12px] text-red-500'>{phoneError}</p>
          <div className="mb-4">
            <input
            onChange={(e)=>{setPhone(e.target.value), setPhoneError()}}
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
           {/* ---password-- */}
    <p className='text-[12px] text-red-500'>{passwordError}</p>
   <div className="mb-4 relative">
    <input
    onChange={(e)=> {setPassword(e.target.value), setPasswordError()}}
    type={showPass ? "text" : "password"}
    placeholder="Password"
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
  />
  {
    showPass ?
      <FiEye
        onClick={() => setShowPass(!showPass)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
      />
      :
      <FaRegEyeSlash
        onClick={() => setShowPass(!showPass)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
      />
  }
</div>

{/*--- confirm pass ---- */}
 <p className='text-[12px] text-red-500'>{confirmPasswordError}</p>
<div className="mb-4 relative">
  <input
  onChange={(e)=>{setconfirmPassword(e.target.value),setconfirmPasswordError()}}
    type={showPass ? "text" : "password"}
    placeholder="Confirm Password"
    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 pr-10"
  />
  {
    showPass ?
      <FiEye
        onClick={() => setShowPass(!showPass)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
      />
      :
      <FaRegEyeSlash
        onClick={() => setShowPass(!showPass)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
      />
  }
</div>
     


          <div className="flex items-center mb-4">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree with terms & conditions
            </label>
          </div>

          <button
            type="submit"  className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition">
             Register          
          </button>

          <div className="flex justify-center mt-6 space-x-4">
          <button
          type="button"className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
             Google account <FcGoogle className="w-5 h-5 mr-2" />
          </button>

        <button type="button" className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100">
        <FaFacebookSquare className="w-5 h-5 mr-2 text-blue-600" />  Facebook account
      </button>
     </div>

          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account? <a href="#" className="text-purple-500 hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default Registration