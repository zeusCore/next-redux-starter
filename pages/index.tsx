import type { NextPage, NextPageContext } from "next";
import Comp from "../components";

import { Provider } from "react-redux";
import store, { initState } from "../redux/store";

const Home: NextPage = (props: PlainObject) => {
  console.log("Home");
  const { fuck } = props;
  initState({ counter: { value: 100 } });
  return (
    <Provider store={store}>
      <Comp />
    </Provider>
  );
};

export const getServerSideProps = (context: NextPageContext) => {
  return {
    props: {
      fuck: { value: "!!!" },
    },
  };
};

export default Home;
