import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider } from "react-apollo";

const client = new ApolloClient();
const rootEl = document.getElementById("app");

ReactDOM.render(
  <ApolloProvider client={client}>
    <h1>Hello</h1>
  </ApolloProvider>,
  rootEl,
);

