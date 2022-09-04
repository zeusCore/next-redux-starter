/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { initState, TRootState } from "../redux/store";
import Header from "./components/Header";
const MyApp: any = (props: any) => {
  console.log("MyApp");

  const { Component, pageProps, counter, login } = props;

  initState({ counter, login } as TRootState);

  return (
    <Provider store={store}>
      <Header />
      <script src="/modules.js" ></script>
      <Component {...pageProps} />
    </Provider>
  );
};
const getInitialProps = (context: AppContext) => {
  return { counter: { value: 100 }, login: { username: "游客" } } as TRootState;
};
MyApp.getInitialProps = getInitialProps;
export default MyApp;
