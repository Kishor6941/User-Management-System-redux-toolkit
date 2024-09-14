import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import UserSlice from "./slice/UserSlice";

export const store =  configureStore({
    
    reducer : {
        user : UserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
