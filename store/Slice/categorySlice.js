import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../src/axiosConfig/instance';

export const fetchcategory = createAsyncThunk(
    "category/fetch", async (name) => {
        const reaponse = await axiosInstance.get(`/category/getbyname/${name}`)
        // console.log(reaponse.data.pages);
        return reaponse.data.data.products;
    }
)

// export const fetchcategorypage = createAsyncThunk(
//     "category/fetch", async (name) => {
//         const reaponse = await axiosInstance.get(`/category/getbyname/${name}`)
//         console.log(reaponse.data.pages);
//         return reaponse.data.pages;
//     }
// )

export const fetchcategorypage = createAsyncThunk(
    "category/fetch", async (name) => {
        const reaponse = await axiosInstance.get(`/category/getbyname/${name}`)
        console.log(reaponse.data.pages);
        return reaponse.data.pages;
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
     

    }


})

export default categorySlice.reducer