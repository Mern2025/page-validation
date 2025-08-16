import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
const Login = () => {


  const [formData , setFormData] = useState({email: '', emailError: '', password:'', passwordError:''})  
  const auth = getAuth();
  const navigate = useNavigate()


  const handelLogin = ()=>{

    if(!formData.email) return alert('Please fill in both email and password fields before submitting')
    if(!formData.password)    alert('enter your password')

  signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    
     console.log(user)

     if(user.emailVerified == true){
      toast.success('Login done', {
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
      navigate('/')
     }else{
      toast.info('please verify your Email', {
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
     }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    if(errorCode){
    toast.error('Something went wrong', {
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
console.log(errorCode)
    }
  });
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center">Sign In Pingly</h2>
      
        <form action="#">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              onChange={(e)=>setFormData((prev)=> ({...prev, email:e.target.value}))}
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
              onChange={(e)=>setFormData((prev)=>({...prev, password:e.target.value}))}
                type="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            onClick={handelLogin}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{' '}
           <Link to={'/registration'} className="text-purple-500 hover:underline" >Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  );

}

export default Login