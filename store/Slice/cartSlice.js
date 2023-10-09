import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchCart=createAsyncThunk(
    "cart/fetch",async ()=>{
     
        // console.log(localStorage.getItem('userId').replaceAll('"',""));
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        // let userId="651cac675238c660afc16f53"

        const reaponse=await axiosInstance.get(`/cart/${userId}`, { headers:{
            Authorization:localStorage.getItem('token').replaceAll('"',"")

        }})
        return  reaponse.data.data.items;
    }
)

export const addProductInCart=createAsyncThunk(
    "cart/addProduct",async (body)=>{
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        const reaponse=await axiosInstance.post(`/cart/${userId}/addProductInCart`,body , { headers:{
            Authorization:localStorage.getItem('token').replaceAll('"',"")

        }})
        return  reaponse.data.data;
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
        // [deleteitem.fulfilled ]:(state , {payload})=>{
        //     // fetchCart()
        // },
       

    }


})

export default cartSlice.reducer