import { decode, encode } from "js-base64";
import Cookies, { CookieAttributes } from "js-cookie";

const encodeCookies = Cookies.withConverter({
  write(value) {
    return encode(value as any);
  },
  read(value) {
    return decode(value);
  },
});

export * from "js-base64";

export const getCookie = (name: string, encode?: boolean) => {
  return (encode ? encodeCookies.get : Cookies.get)(name);
};
export const getCookieJson = (
  name: string,
  encode?: boolean
): Record<string, any> | Array<any> => {
  const value = (encode ? encodeCookies.get : Cookies.get)(name);
  return value ? JSON.parse(value) : null;
};

/**
 * 【坑】chrome85之后sameSite改了默认值为lax，部分场景如跨域iframe不发送cookie，需设置为None 且 secure:true(https)，然proxima未要求必须https访问
 * @param name
 * @param value 支持各种原始类型以及可序列化的对象
 * @param options @options 支持base64简单加密，以及cookies其他参数
 */
export const setCookie = (
  name: string,
  value: string | number | boolean | Record<string, any> | Array<any>,
  options: ICookieAttributes = {}
): void => {
  if (value && typeof value === "object") {
    try {
      const res = JSON.stringify(value);
      (options.encode ? encodeCookies.set : Cookies.set)(name, res, options);
    } catch (e) {
      throw Error("[setCookie] value should be serializable.");
    }
  } else {
    if (value === null || value === undefined) Cookies.remove(name);
    else
      (options.encode ? encodeCookies.set : Cookies.set)(
        name,
        value.toString(),
        options
      );
  }
};

export const removeCookie = (name: string): void => {
  Cookies.remove(name);
};

interface ICookieAttributes extends CookieAttributes {
  encode?: boolean;
}
