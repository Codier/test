import blogPost from './blog-post';
import comment from './comment';
import slaDomain from './sla-domain';

export default {
  ...blogPost,
  ...comment,
  ...slaDomain
};
