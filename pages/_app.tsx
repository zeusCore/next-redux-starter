import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
const MyApp: any = (props: any) => {
  console.log("MyApp");
  const { Component, pageProps, fuck } = props;
  return <Component {...pageProps} />;
};
const getInitialProps = (context: AppContext) => {
  return {
    fuck: { value: "fuckkkkkkkkkkk" },
  };
};
MyApp.getInitialProps = getInitialProps;
export default MyApp;
