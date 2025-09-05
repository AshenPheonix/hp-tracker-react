import { configureStore } from "@reduxjs/toolkit";
import HPReducer from '../stores/HpSlice'
import MessageReducer from '../stores/Message'

export default configureStore({
    reducer:{
        HPReducer,
        MessageReducer
    }
})