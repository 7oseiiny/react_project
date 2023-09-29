import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchCart=createAsyncThunk(
    "cart/fetch",async (userId)=>{
        const reaponse=await axiosInstance.get(`/cart/${userId}`)
        return  reaponse.data.data.items;
    }
)

export const deleteitem=createAsyncThunk(
    "cart/update",async (userId,productId)=>{
        await axiosInstance.patch(`/cart/${userId}/removeProductsInCart/${productId}/`)
 
    }
)


 const cartSlice =createSlice({

    name:"cart",
    initialState:{
        data:[],
        status:null
    },
    extraReducers:{
        [fetchCart.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchCart.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchCart.rejected ]:(state  )=>{
            state.status='failed'

        },
        /////
        [deleteitem.fulfilled ]:(state , {payload})=>{
            // fetchCart()
        },
       

    }


})

export default cartSlice.reducer