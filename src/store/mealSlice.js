import { createSlice } from "@reduxjs/toolkit";


const mealSlice=createSlice(
    {
        name:"meal",
        initialState:{
            items:[],
        },
        reducers:{
            addItem:(state,action)=>{
               state.items.push(action.payload); 
               
            },
            
            clearCart:(state)=>{
                state.items.length=0;
            }
            ,
            removeItem:(state)=>{
                state.items.pop();
            }
        }
    }
)

export const {addItem,clearCart,removeItem}=mealSlice.actions;
export default mealSlice.reducer;