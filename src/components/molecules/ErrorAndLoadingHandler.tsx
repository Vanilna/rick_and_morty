import React from "react";
import { ApolloError } from "@apollo/client";

import Loader from "../atoms/Loader";

type ErrorAndLoadingHandlerProps = {
  loading: boolean | undefined;
  error: ApolloError | undefined;
};

const ErrorAndLoadingHandler: React.FC<ErrorAndLoadingHandlerProps> = ({
  loading,
  error,
  children,
}) => (
  <>
    {!loading && !error && children}
    {loading && <Loader />}
    {error && <p>Sorry, something went wrong, please try again later</p>}
  </>
);

export default ErrorAndLoadingHandler;
