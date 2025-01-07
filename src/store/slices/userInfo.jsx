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
      localStorage.setItem('userList', JSON.stringify(state.userList)); // as we need all the info to be stored in the localStorage.
    // //   else , to save particular data in localStorage
    // const updatedUserList = [...state.userList, action.payload]; 
    //   state.userList = updatedUserList; 
    //   localStorage.setItem("userList", JSON.stringify(updatedUserList)); 
    },
    updateUserData: (state, action) => {
      const { firstName, lastName, email } = action.payload;

      const userIndex = state.userList.findIndex(user => user.email === email);
     
          state.userList[userIndex] = {
            ...state.userList[userIndex],
              firstName,
              lastName,
              email
          };

          localStorage.setItem('userList', JSON.stringify(state.userList));
      },
      deleteUserData: (state, action) => {
        const email  = action.payload;
  
        state.userList = state.userList.filter((user) => user.email !== email);
        localStorage.setItem('userList', JSON.stringify(state.userList));
      },
    },
});

export const { saveUserData, updateUserData, deleteUserData } = userListSlice.actions;

export default userListSlice.reducer;