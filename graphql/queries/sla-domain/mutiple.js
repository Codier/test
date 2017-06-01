import {
  GraphQLList,
  GraphQLID
} from 'graphql';

import requestify from 'requestify';

import slaDomainType from '../../types/sla-domain';
import common from '../../common';

export default {
  type: new GraphQLList(slaDomainType),
  args: {
    primaryClusterId: {
      name: 'primaryClusterId',
      type: GraphQLID
    }
  },
  resolve (root, params, options) {
    return requestify
      .request(
        common.remoteUrl,
        {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + common.encodedCreds
          }
        }
      )
      .then((response) => {
        // Get the response body
        return response.getBody().data;
      }).catch((e) => {
        console.log('error', e);
      });
  }
};
