import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Session',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    userId: {
      type: GraphQLString
    },
    token: {
      type: GraphQLString
    }
  })
});
