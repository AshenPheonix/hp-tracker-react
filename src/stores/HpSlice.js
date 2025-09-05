import { createSlice } from "@reduxjs/toolkit";

export const HPSlice = createSlice({
    name: 'HP',
    initialState:{
        p1: 40,
        p2: 40,
        p3: 40,
        p4: 40
    },
    reducers:{
        dropHp: (state, action)=>{
            switch(action.payload.who){
                case 'p1':
                    state.p1 += action.payload.damage
                    break;
                case 'p2':
                    state.p2 += action.payload.damage
                    break;
                case 'p3':
                    state.p3 += action.payload.damage
                    break;
                case 'p4':
                    state.p4 += action.payload.damage
                    break;
                     
                default:
                    console.log('Could not read, update and try again', action)
            }
        }
    }
})

export const {dropHp} = HPSlice.actions
export default HPSlice.reducer