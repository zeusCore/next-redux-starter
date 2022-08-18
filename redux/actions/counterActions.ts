import { incrementByAmount } from "redux/slices/counterSlice";
import { TAppDispatch, TRootState } from "redux/store";

export const incrementAsync =
  (amount: number) =>
  async (dispatch: TAppDispatch, getState: () => TRootState) => {
    const state = getState();
    console.log(state);
    setTimeout(() => {
      dispatch(incrementByAmount(amount));
    }, 1000);
  };
