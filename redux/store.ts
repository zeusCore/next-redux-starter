import { configureStore } from "@reduxjs/toolkit";
import login from "./slices/loginSlice";
import counter from "./slices/counterSlice";
const store = configureStore({
  reducer: {
    login,
    counter,
  },
});
export default store;
export const initState = (state: IPlainObject) => {
  Object.keys(state).forEach((key) => {
    store.dispatch({ type: `${key}/init`, payload: state[key] });
  });
};
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
