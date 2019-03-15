const { GraphQLServer } = require('graphql-yoga')
const Mustation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const db = require('./db')

// Create the GraphQl Yoga Server
function createServer() {
  return new GraphQLServer({
    typeDefts: './src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: request => ({ ...request, db })
  })
}

module.exports = createServer
