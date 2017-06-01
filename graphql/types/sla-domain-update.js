import {
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'SlaDomainUpdate',
  fields: {
    name: {
      type: GraphQLString
    }
  }
});
