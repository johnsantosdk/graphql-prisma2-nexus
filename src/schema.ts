import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'

// const User = objectType({
//   name: 'User',
//   definition(t) {
//     t.model.id()
//     t.model.name()
//     t.model.email()
//   },
// })

export const schema = makeSchema({
  types: [  ], //User, Empoyees, etc... Models
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus-typegen.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '.prisma/client',
        alias: 'prisma'
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})