import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchuser=createAsyncThunk(
    "user/fetch",async ()=>{
        let userId="650f39d8933f94900f5e75e6"
        const reaponse=await axiosInstance.get(`/user/${userId}`)
        return  reaponse.data.data;
    }
)


 const userSlice =createSlice({

    name:"user",
    initialState:{
        data:"k",
        status:null
    },
    extraReducers:{
        [fetchuser.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchuser.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchuser.rejected ]:(state  )=>{
            state.status='failed'

        },
   

    }


})

export default userSlice.reducer