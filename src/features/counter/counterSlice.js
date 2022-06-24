import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// create counter slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // put all actions for counter here
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, actions) => {
      state.count += actions.payload;
    },
    reset: (state) => {
      state.count = 0;
      state.valueInput = 0;
    },
  },
});

// export actions from reducer
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
// export the whole reducer because the store needs it
export default counterSlice.reducer;
