import { createSlice } from "@reduxjs/toolkit";
const initialErrorState = {
    msg:"testing error",
    showMessage:false,
};
const errorSlice = createSlice({
    name: "error",
    initialState: initialErrorState,
    reducers:{
        hideMessage(state){
            state.showMessage = false;
        },    
        showMessage(state){
            state.showMessage = true;
        },
        setErrorMsg(state,action){
            
            state.msg = action.payload;
        },    
    }
});
export const errorActions = errorSlice.actions;
export default errorSlice.reducer;