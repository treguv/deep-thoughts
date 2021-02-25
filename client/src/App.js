import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
//import other components
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SingleThought from "./pages/SingleThought";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
const client = new ApolloClient({
  uri: "/graphql", //react runs on 3000, server on 3001, need to specify abaolute path,
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              {/* Render these components when the browser path matches */}
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              {/* ? means param is optional */}
              <Route exact path="/profile/:username" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />
              {/* Catch all non existing routes */}
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
