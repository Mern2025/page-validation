// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from '../slices/userInfo'

// const Practice = () => {

//     const reduxData = useSelector(state => state.currentUserInfo.value)
//     const dispatch = useDispatch()

//     console.log(reduxData)

//     const handleAdd = ()=>{
//         dispatch(increment())
//     }

//     const handleRemove = ()=>{
//         if(reduxData == 0) return alert('It will not go below (0) zero.')
//         dispatch(decrement())
//     }
 

//   return (
//     <>
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="flex items-center bg-white rounded-xl shadow-lg p-6 space-x-4">
//         {/* Minus Button */}
//         <button onClick={handleRemove} className="bg-red-500 text-white text-2xl w-12 h-12 rounded-lg hover:bg-red-600 transition-colors">
//           -
//         </button>

//         {/* Counter Display */}
//         <h1 className="text-3xl font-semibold w-16 text-center">{reduxData}</h1>

//         {/* Plus Button */}
//         <button onClick={handleAdd} className="bg-green-500 text-white text-2xl w-12 h-12 rounded-lg hover:bg-green-600 transition-colors">
//           +
//         </button>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Practice