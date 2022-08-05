import { configureStore } from "@reduxjs/toolkit";
import counter2 from "./counter2";
import counterReducer from "./counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counter2,
  },
});
export default store;
export const initState = (state: PlainObject) => {
  Object.keys(state).forEach((key) => {
    store.dispatch({ type: `${key}/init`, payload: state[key] });
  });
};
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
