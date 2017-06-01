import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import { GraphQLError } from 'graphql/error'; // ES6

import slaDomainType from '../../types/sla-domain';
import slaDomainUpdateType from '../../types/sla-domain-update';
import requestify from 'requestify';
import common from '../../common';

export default {
  type: slaDomainType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(slaDomainUpdateType)
    }
  },
  async resolve (root, params, options) {
    return requestify
      .request(
        common.remoteUrl + '/' + params.id,
        {
          method: 'PATCH',
          headers: {
            'Authorization': 'Basic ' + common.encodedCreds
          },
          body: params.data
        }
      )
      .then((response) => {
        return response.getBody();
      }).catch((e) => {
        console.log('error', e);
        return new GraphQLError(e.body);
      });
  }
};
