import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../graphql/client";

const AppWrapper: React.FC = ({ children }): JSX.Element => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default AppWrapper;
