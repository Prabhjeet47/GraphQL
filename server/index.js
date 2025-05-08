const express = require("express");
const cors = require("cors");
const {ApolloServer} = require("@apollo/server");
const {expressMiddleware} = require("@apollo/server/express4");

const typeDefs = require("./typeDef.js");
const resolvers = require("./resolver.js");

require("dotenv").config();

async function startServer() {
  const app = express();

  const server = new ApolloServer({typeDefs, resolvers});

  await server.start();

  app.use(cors());
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer();
