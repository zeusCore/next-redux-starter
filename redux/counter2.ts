import { createSlice } from "@reduxjs/toolkit";

export const counter2 = createSlice({
  name: "counter2",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = counter2.actions;

export default counter2.reducer;