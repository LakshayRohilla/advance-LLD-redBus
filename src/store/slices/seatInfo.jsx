import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatInfo: localStorage.getItem("seatInfo")
    ? JSON.parse(localStorage.getItem("seatInfo"))
    : {
        lowerBackSeat: [{ last: 1 }],
        lowerRightSeats: [
          { "First Lower Right": 0 },
          { "Second Lower Right": 1 },
          { "Third Lower Right": 0 },
          { "Forth Lower Right": 0 },
          { "Fifth Lower Right": 0 },
          { "Sixth Lower Right": 0 },
          { "Seventh Lower Right": 1 },
          { "Eighth Lower Right": 1 },
          { "Ninth Lower Right": 0 },
          { "Tenth Lower Right": 0 },
        ],
        lowerLeftSeats: [
          { "First Lower Left": 0 },
          { "Second Lower Left": 1 },
          { "Third Lower Left": 0 },
          { "Forth Lower Left": 1 },
          { "Fifth Lower Left": 1 },
        ],
        upperBackSeat: [{ last: 1 }],
        upperRightSeats: [
          { "First Upper Right": 1 },
          { "Second Upper Right": 0 },
          { "Third Upper Right": 0 },
          { "Forth Upper Right": 1 },
          { "Fifth Upper Right": 0 },
          { "Sixth Upper Right": 0 },
          { "Seventh Upper Right": 0 },
          { "Eighth Upper Right": 0 },
          { "Ninth Upper Right": 1 },
          { "Tenth Upper Right": 0 },
        ],
        upperLeftSeats: [
          { "First Upper Left": 1 },
          { "Second Upper Left": 1 },
          { "Third Upper Left": 0 },
          { "Forth Upper Left": 1 },
          { "Fifth Upper Left": 0 },
        ],
      },
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

export const {
  updateLowerRightSeats,
  updateLowerLeftSeats,
  updateUpperRightSeats,
  updateUpperLeftSeats,
} = seatInfoSlice.actions;

export default seatInfoSlice.reducer;
