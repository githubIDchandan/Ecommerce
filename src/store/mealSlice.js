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
            removeItem:(state,action)=>{
                // state.items.pop();
                const indx=state.items.findIndex((element)=>element.name===action.payload)
                state.items.splice(indx,1)
            }
        }
    }
)

export const {addItem,clearCart,removeItem}=mealSlice.actions;
export default mealSlice.reducer;









