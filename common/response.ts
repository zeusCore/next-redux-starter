export const formatResponse = (
  code: number,
  data: IPlainObject,
  message?: string
) => ({
  code,
  data,
  message,
});

export type TResponseData = {
  code: number;
  data?: IPlainObject;
  message?: string;
};
