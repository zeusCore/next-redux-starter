import { TResponseData } from "common/response";
import fetch from "common/utils/fetch";
import { updateLoginStatus } from "redux/slices/loginSlice";
import { TAppDispatch, TRootState } from "redux/store";

export const loginValidate =
  (name: string, pwd: string) => async (dispatch: TAppDispatch) => {
    const { code, data }: TResponseData = await fetch.post("/login", {
      name,
      pwd,
    });
    if (code === 0) {
      dispatch(updateLoginStatus(data?.name));
    }
  };
