import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import client from "../../graphql/client";
import MainRouter from "src/navigation/MainRouter";
import Header from "../molecules/Header";

const AppWrapper: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Header />
      <MainRouter />
    </ApolloProvider>
  </BrowserRouter>
);

export default AppWrapper;
