import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphql/client";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "src/navigation/MainRouter";

const AppWrapper: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <MainRouter />
    </ApolloProvider>
  </BrowserRouter>
);

export default AppWrapper;
