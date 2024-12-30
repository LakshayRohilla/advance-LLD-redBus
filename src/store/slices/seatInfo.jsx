import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatInfo: localStorage.getItem("seatInfo")
    ? JSON.parse(localStorage.getItem("seatInfo"))
    : {
        lowerBackSeat : {last:1},
        lowerRightSeats : { first: 0, second: 1, third: 0, fourth: 0, fifth: 0, sixth: 0, seventh: 1, eighth: 1, ninth: 0, tenth: 0},
        lowerLeftSeats : { first: 0, second: 1, third: 0, fourth: 1, fifth: 1},
        upperBackSeat : {last:1},
        upperRightSeats : { first: 1, second: 0, third: 0, fourth: 1, fifth: 0, sixth: 0, seventh: 0, eighth: 0, ninth: 1, tenth: 0},
        upperLeftSeats : { first: 1, second: 1, third: 0, fourth: 1, fifth: 0 }
    }
};

const seatInfoSlice = createSlice({
  name: "seatInfo",
  initialState,
  reducers: {
    updateLowerRightSeats: (state, action) => {
        const whichSeat = action.payload;
        state.seatInfo.lowerRightSeats[whichSeat] = 1;
        localStorage.setItem("seatInfo", JSON.stringify(state.seatInfo));
      },
      updateLowerLeftSeats: (state, action) => {
        const whichSeat = action.payload;
        state.seatInfo.lowerLeftSeats[whichSeat] = 1;
        localStorage.setItem("seatInfo", JSON.stringify(state.seatInfo));
      },
      updateUpperRightSeats: (state, action) => {
        const whichSeat = action.payload;
        state.seatInfo.upperRightSeats[whichSeat] = 1;
        localStorage.setItem("seatInfo", JSON.stringify(state.seatInfo));
      },
      updateUpperLeftSeats: (state, action) => {
        const whichSeat = action.payload;
        state.seatInfo.upperLeftSeats[whichSeat] = 1;
        localStorage.setItem("seatInfo", JSON.stringify(state.seatInfo));
      },
  },
});

export const { updateLowerRightSeats, updateLowerLeftSeats, updateUpperRightSeats, updateUpperLeftSeats } = seatInfoSlice.actions;

export default seatInfoSlice.reducer;

