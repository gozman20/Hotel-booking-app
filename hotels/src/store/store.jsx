import { configureStore } from '@reduxjs/toolkit'
import RoomsReducer from '../features/RoomSlice'

const store = configureStore({
  reducer: RoomsReducer,
})

export default store