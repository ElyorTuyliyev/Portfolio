import { createSlice } from "@reduxjs/toolkit";
import { CounterType } from "./types";

const initialState: CounterType = {
  count: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { decrement, increment } = CounterSlice.actions;
export default CounterSlice.reducer;
