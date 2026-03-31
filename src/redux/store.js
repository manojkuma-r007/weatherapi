import { configureStore } from "@reduxjs/toolkit";
import authReducers from './reducers/authSlice'

const store = configureStore({
    reducer:{
        auth:authReducers
    }

})

export default store;