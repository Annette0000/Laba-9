const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createStore } = require("./utils");
const LaunchAPI = require("./datasources/launch");
const UserAPI = require("./datasources/user");
const resolvers = require("./resolvers");

const store = createStore();
/*
const resolvers = {
  Query: {
    hell: () => "aaaaaa!"
  }
};*/

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  }),
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
