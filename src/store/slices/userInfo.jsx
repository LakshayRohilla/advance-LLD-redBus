import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: localStorage.getItem("userList")
    ? JSON.parse(localStorage.getItem("userList"))
    : [],
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.userList = [...state.userList, action.payload];
      localStorage.setItem('userList', JSON.stringify(state)); // as we need all the info to be stored in the localStorage.
    // //   else , to save particular data in localStorage
    // const updatedUserList = [...state.userList, action.payload]; 
    //   state.userList = updatedUserList; 
    //   localStorage.setItem("userList", JSON.stringify(updatedUserList)); 
    },
  },
});

export const { saveUserData } = userListSlice.actions;

export default userListSlice.reducer;