import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const CartSlide=createSlice({
  name:"add To cart",
  initialState, 
  reducers:{
    add(state,action){
        state.push(action.payload);
    }
  } 
})
export const {add}=CartSlide.actions;
export default CartSlide.reducer;
