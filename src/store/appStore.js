import mealSlice from "./mealSlice"
import { configureStore } from "@reduxjs/toolkit";

const appStore=configureStore(
    {
        reducer:{
            meal:mealSlice,
        },
    }
)

export default appStore;