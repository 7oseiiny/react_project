import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../src/axiosConfig/instance';

export const fetchfavorite=createAsyncThunk(
    "favorite/fetch",async ()=>{
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        const reaponse=await axiosInstance.get(`/favorite/${userId}`)
        return  reaponse.data.data;
    }
)

export const addProductInfavorite=createAsyncThunk(
    "favorite/addProduct",async (body)=>{
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        const reaponse=await axiosInstance.post(`/favorite/${userId}/addProductInfavorite`,body)
        return  reaponse.data.data;
    }
)



 const favoriteSlice =createSlice({

    name:"favorite",
    initialState:{
        data:{},
        status:null
    },
    extraReducers:{
        [fetchfavorite.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchfavorite.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchfavorite.rejected ]:(state  )=>{
            state.status='failed'

        },
        /////
        // [deleteitem.fulfilled ]:(state , {payload})=>{
        //     // fetchfavorite()
        // },
       

    }


})

export default favoriteSlice.reducer