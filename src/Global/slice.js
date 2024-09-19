import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
  name: 'kindraise',
  initialState: {
    user: {},
    token: '',
    role:''
  },
  reducers:{
    addUser: (state, {payload})=>{
      state.user = payload
    },
    userToken: (state, {payload})=>{
      state.token = payload
    },
    userRole: (state, {payload})=>{
      state.role = payload
    },
  }
});
export const { addUser, userToken,userRole} = appSlice.actions;
export default appSlice.reducer;
