import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchOrder=createAsyncThunk(
    "Order/fetch",async ()=>{
        let userId="650f39d8933f94900f5e75e6"
        const reaponse=await axiosInstance.get(`/Order/${userId}`)
        return  reaponse.data.data.items;
    }
)

// export const deleteitem=createAsyncThunk(
//     "Order/update",async (userId,productId)=>{
//         await axiosInstance.patch(`/Order/${userId}/removeProductsInOrder/${productId}/`)
 
//     }
// )


 const OrderSlice =createSlice({

    name:"Order",
    initialState:{
        data:[],
        status:null
    },
    extraReducers:{
        [fetchOrder.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchOrder.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchOrder.rejected ]:(state  )=>{
            state.status='failed'

        },
    }


})

export default OrderSlice.reducer