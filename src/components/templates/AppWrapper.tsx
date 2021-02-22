import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import client from "../../graphql/client";

import MainRouter from "src/navigation/MainRouter";
import Header from "../molecules/Header";
import Background from "./Background";

const AppWrapper: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Background>
        <Header />
        <MainRouter />
      </Background>
    </ApolloProvider>
  </BrowserRouter>
);

export default AppWrapper;
