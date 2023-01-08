// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserProfileVisibility = {
  "PRIVATE": "PRIVATE",
  "PUBLIC": "PUBLIC",
  "ARCHIVED": "ARCHIVED"
};

const { Post, UserProfile } = initSchema(schema);

export {
  Post,
  UserProfile,
  UserProfileVisibility
};