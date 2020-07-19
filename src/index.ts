import { GraphQLServer } from 'graphql-yoga' 
// import { schema } from './schema'
import { createContext } from './context'
// const { GraphQLServer } = require('graphql-yoga')
const { schema } = require('./schema')
// const { createContext } = require('./context')

const server = new GraphQLServer({
  schema,
  context: createContext
})

server.start( () => console.log('Server ready at http://localhost:4000'))