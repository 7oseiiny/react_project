import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchuser=createAsyncThunk(
    "user/fetch",async ()=>{
        // let userId="651cac675238c660afc16f53"
                let userId=localStorage.getItem('userId').replaceAll('"',"")

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