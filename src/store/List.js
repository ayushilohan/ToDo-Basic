import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: ["pen"],
        newList: []
    },
    reducers: {
        addToList : (state,action)=> {
            state.list = [...state.list, action.payload];
            state.newList = [...state.newList];
        },
        addToCart : (state,action)=> {
            let val = state.list.splice(action.payload,1);
            let value = val[0];
            state.list = [...state.list];
            state.newList = [...state.newList, value];
        },
        cancelHandler : (state,action)=> {
            let val = state.newList.splice(action.payload,1);
            let value = val[0];
            state.list = [...state.list, value];
            state.newList = [...state.newList];
        },
        buyHandler : (state,action)=> {
            state.newList.splice(action.payload,1);
            state.list = [...state.list];
            state.newList = [...state.newList];
        }
    }
});

export const listActions = listSlice.actions;

export default listSlice.reducer;