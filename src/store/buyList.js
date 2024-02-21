import { createSlice } from "@reduxjs/toolkit";

const buyListSlice = createSlice({
    name: 'buyList',
    initialState: {
        buyList: []
    },
    reducers : {
        buyListHandler : (state,action)=> {
            state.buyList = [...state.buyList,action.payload];
        }
    }
})

export const buyListActions = buyListSlice.actions;

export default buyListSlice.reducer;