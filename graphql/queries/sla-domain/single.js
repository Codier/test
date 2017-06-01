import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import slaDomainType from '../../types/sla-domain';
import mockData from '../../data/sla-domain';

export default {
  type: slaDomainType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return mockData.slaDomainMockData.filter(function(slaDomain) {
      return slaDomain.id === params.id;
    })[0];
  }
};
