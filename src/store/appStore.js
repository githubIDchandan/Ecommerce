import mealSlice from "./mealSlice"
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"

const appStore=configureStore(
    {
        reducer:{
            meal:mealSlice,
            user:userSlice,
        },
    }
)

export default appStore;