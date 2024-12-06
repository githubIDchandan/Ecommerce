import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
      name:"user",
      initialState:{
        userProps:null,
      },
      reducers:{
        addUser:(state,action)=>{
            state.userProps=action.payload;
        },
        removeUser:(state)=>{
            state.userProps=null;
        }
      }

})



export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer