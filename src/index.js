import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";

// https://stable-frog-55.hasura.app/console/api-explorer

const client = new ApolloClient({
  uri: "https://stable-frog-55.hasura.app/v1/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
