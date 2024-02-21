import { configureStore } from '@reduxjs/toolkit'

import listReducer from './List';
import buyListReducer from './buyList'


const store = configureStore({
    reducer: {list: listReducer, buyList: buyListReducer}
});


export default store;

// we are importing listReducer instead of ListSlice
// listReducer = listSlice.reducer