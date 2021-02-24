import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/Home";
const client = new ApolloClient({
  uri: "/graphql", //react runs on 3000, server on 3001, need to specify abaolute path,
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
