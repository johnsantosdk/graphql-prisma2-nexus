import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as allTypes from './schemas'

export const schema = makeSchema({
  types: allTypes, //User, Empoyees, etc... Models
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus-typegen.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma'
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})