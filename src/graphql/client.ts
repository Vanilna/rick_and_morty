import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "../constants";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: API_URL,
  cache,
});

export default client;
