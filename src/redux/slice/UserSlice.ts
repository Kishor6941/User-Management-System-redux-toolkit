import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface userData {
    id: string
    name: string,
    email : string,
    phoneNo : number
  }
const UserSlice =  createSlice({
    initialState : [] as userData [],
    name : "user",
    reducers : {
        adduser : (state,action:PayloadAction<userData>) => {
            state.push(action.payload)
        },
        updateuser : (state,action) => {
            return state.map((user) => {
                if(user?.id === action.payload.id) {
                    return {
                        ...user,
                        name : action.payload.name,
                        email : action.payload.email,
                        phoneNo : action.payload.phoneNo,
                    }
                } else {
                    return user   
                }
            })
        },
        deleteuser : (state,action) => {
            return state.filter((user) => user?.id !== action.payload)
        }
    }
})

export const {adduser, updateuser, deleteuser} = UserSlice.actions
export default UserSlice.reducer