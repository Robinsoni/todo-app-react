import { configureStore } from "@reduxjs/toolkit";
import errorReducer from './error';
const store = configureStore({
    reducer: {error:errorReducer}
});
export default store;