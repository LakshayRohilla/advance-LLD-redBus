import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './slices/userInfo';
import seatInfoReducer from './slices/seatInfo';


const store = configureStore({
    reducer:{ user: userInfoReducer, seat: seatInfoReducer }
})

export default store;