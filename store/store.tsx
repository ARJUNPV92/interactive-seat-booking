import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./seatSlice";

const store = configureStore({
  reducer: {
    seats: seatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
