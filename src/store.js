import { configureStore } from '@reduxjs/toolkit'
import  userInfo  from './slices/userInfo'

export default configureStore({
  reducer: {
    currentUserInfo : userInfo
  },
})

