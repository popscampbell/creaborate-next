// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserProfileVisibility = {
  "PRIVATE": "PRIVATE",
  "PUBLIC": "PUBLIC",
  "ARCHIVED": "ARCHIVED"
};

const UserNotificationLevel = {
  "NORMAL": "NORMAL",
  "INFO": "INFO",
  "SUCCESS": "SUCCESS",
  "WARNING": "WARNING",
  "ERROR": "ERROR"
};

const { UserProfile, UserInterest, Interest, UserSkill, Skill, UserNotification } = initSchema(schema);

export {
  UserProfile,
  UserInterest,
  Interest,
  UserSkill,
  Skill,
  UserNotification,
  UserProfileVisibility,
  UserNotificationLevel
};