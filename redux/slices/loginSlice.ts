import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
  name: "login",
  initialState: {
    username: "",
    isLogined: false,
  },
  reducers: {
    init(state, action) {
      Object.assign(state, action.payload);
    },
    updateLoginStatus: (state, action) => {
      state.username = action.payload;
      state.isLogined = true;
    },
  },
});

export const { updateLoginStatus } = login.actions;

export default login.reducer;
