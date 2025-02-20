import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SeatState {
  selectedSeats: string[];
  totalCost: number;
}

const initialState: SeatState = {
  selectedSeats: [],
  totalCost: 0,
};

const pricing: { [key: string]: number } = { A: 100, B: 100, C: 150, D: 150, E: 200, F: 200 };

const seatSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    toggleSeat: (state, action: PayloadAction<string>) => {
      const seatId = action.payload;
      const row = seatId.charAt(0); // Extract row (A, B, C, etc.)

      if (state.selectedSeats.includes(seatId)) {
        state.selectedSeats = state.selectedSeats.filter((seat) => seat !== seatId);
        state.totalCost -= pricing[row];
      } else {
        if (state.selectedSeats.length < 8) {
          state.selectedSeats.push(seatId);
          state.totalCost += pricing[row];
        }
      }
    },
  },
});

export const { toggleSeat } = seatSlice.actions;
export default seatSlice.reducer;
