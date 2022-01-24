import React from "react";
import { Provider } from "react-redux";
import store from "./src/state/store";

import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <Layout>{element}</Layout>
    </Provider>
  );
};
