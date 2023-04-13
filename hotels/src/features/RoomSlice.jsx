import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { roomData } from "../data";

const initialState = {
  totalRooms: [],
  availableRooms: [],
  totalKids: "0 kids",
  totalAdults: "1 Adult",
  total: 0,
  loading: false,
};

const RoomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(action);
      state.totalRooms = action.payload;
    },
    setAvailableRooms: (state, action) => {
      console.log(action);
      state.availableRooms = action.payload;
    },
    setTotalKids: (state, action) => {
      console.log(action.payload);
      state.totalKids = action.payload;
    },
    setTotalAdults: (state, action) => {
      console.log(action.payload);
      state.totalAdults = action.payload;
    },
    setTotal: (state) => {
      const kidsArray = state.totalKids.split(" ");
      const adultArray = state.totalAdults.split(" ");
      const totalNum = Number(kidsArray[0]) + Number(adultArray[0]);
      console.log(`The total is ${totalNum}`);
      state.total = totalNum;
    },
    setLoading: (state, action) => {
      console.log(action.payload);
      state.loading = action.payload;
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
} = RoomSlice.actions;
export default RoomSlice.reducer;
