import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import "typeface-roboto";

const client = new ApolloClient({
  uri: "/graphql"
});

const WrappedApp = () => (
  <ApolloProvider client={client}>
    <Helmet>
      <title>Trefle Plants</title>
      <meta name="description" content="React, GraphQL, Apollo & Trefle!" />
    </Helmet>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
