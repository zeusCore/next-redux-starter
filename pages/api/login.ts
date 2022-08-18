import { RESPONCE_CODE } from "common/constants/request";
import { formatResponse, TResponseData } from "common/response";
import type { NextApiHandler } from "next";

export default <NextApiHandler<TResponseData>>function handler(req, res) {
  res
    .status(200)
    .json(formatResponse(RESPONCE_CODE.success, { name: "999" }, "done"));
};
