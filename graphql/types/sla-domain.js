import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'SlaDomain',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    primaryClusterId: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    frequencies: {
      type: new GraphQLList(SlaFrequency)
    }
  })
});

const SlaFrequency = new GraphQLObjectType({
  name: 'SlaFrequency',
  fields: () => ({
    timeUnit: { // TODO: This can be an enum.
      type: GraphQLString
    },
    frequency: {
      type: GraphQLInt
    },
    retention: {
      type: GraphQLInt
    }
  })
});
