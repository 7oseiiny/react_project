import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../src/axiosConfig/instance';

export const fetchcategory = createAsyncThunk(
    "category/fetch", async (name) => {
        const reaponse = await axiosInstance.get(`/category/getbyname/${name}`)
        return reaponse.data.data.products;
    }
)



const categorySlice = createSlice({

    name: "category",
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [fetchcategory.fulfilled]: (state, { payload }) => {
            state.data = payload
            state.status = 'success'
        },
        [fetchcategory.pending]: (state) => {
            state.status = 'loading'

        },
        [fetchcategory.rejected]: (state) => {
            state.status = 'failed'

        },
        /////
        // [deleteitem.fulfilled ]:(state , {payload})=>{
        //     // fetchcategory()
        // },


    }


})

export default categorySlice.reducer