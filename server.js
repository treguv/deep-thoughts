const express = require("express");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

//import apollo
const { ApolloServer } = require("apollo-server-express");
//import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const app = express();
//create Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // validates token passed to resolvers as context
});

//integrae opollo server with express as middleware
server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    //log where we can test our gql api
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
