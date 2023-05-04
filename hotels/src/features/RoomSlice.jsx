import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { roomData } from "../data";

const initialState = {
  totalRooms: [],
  availableRooms: [],
  totalKids: "0 kids",
  totalAdults: "1 Adult",
  checkIn: new Date(),
  checkOut: new Date(),
  total: 0,
  loading: false,
};

const RoomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    update: (state, action) => {
      state.totalRooms = action.payload;
    },
    setAvailableRooms: (state, action) => {
      state.availableRooms = action.payload;
    },
    setTotalKids: (state, action) => {
      state.totalKids = action.payload;
    },
    setTotalAdults: (state, action) => {
      state.totalAdults = action.payload;
    },
    setTotal: (state) => {
      const kidsArray = state.totalKids.split(" ");
      const adultArray = state.totalAdults.split(" ");
      const totalNum = Number(kidsArray[0]) + Number(adultArray[0]);
      // console.log(`The total is ${totalNum}`);
      state.total = totalNum;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
  },
});

export const {
  update,
  setTotalKids,
  setTotalAdults,
  setTotal,
  setAvailableRooms,
  setLoading,
  setCheckIn,
  setCheckOut,
} = RoomSlice.actions;
export default RoomSlice.reducer;
