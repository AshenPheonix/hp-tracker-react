import { configureStore } from "@reduxjs/toolkit";
import HPReducer from '../stores/HpSlice'

export default configureStore({
    reducer:{
        HPReducer
    }
})