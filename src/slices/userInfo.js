import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
    userInFo:(state, action)=>{
      state.value = action.payload
    }
  },
})
export const {userInFo} = userInfo.actions

export default userInfo.reducer