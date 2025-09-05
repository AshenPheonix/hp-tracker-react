import { createSlice } from "@reduxjs/toolkit";

export const MessageSlice = createSlice({
    name: 'Message',
    initialState: {
        value: ''
    },
    reducers:{
        setMessage: (state, action)=>{
            if ( typeof action.payload === 'string') {
                state.value = action.payload;
            } else {
                state.value = "Could not read request";
            }
        }
    }
})

export const {setMessage} = MessageSlice.actions
export default MessageSlice.reducer