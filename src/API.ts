/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  id?: string | null,
  userId: string,
  visibility: UserProfileVisibility,
  name: string,
  searchName: string,
  tagline?: string | null,
  about?: string | null,
  _version?: number | null,
};

export enum UserProfileVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED",
}


export type ModelUserProfileConditionInput = {
  userId?: ModelIDInput | null,
  visibility?: ModelUserProfileVisibilityInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserProfileVisibilityInput = {
  eq?: UserProfileVisibility | null,
  ne?: UserProfileVisibility | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  userId: string,
  visibility: UserProfileVisibility,
  name: string,
  searchName: string,
  tagline?: string | null,
  about?: string | null,
  interests?: ModelUserInterestConnection | null,
  skills?: ModelUserSkillConnection | null,
  notifications?: ModelUserNotificationConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserInterestConnection = {
  __typename: "ModelUserInterestConnection",
  items:  Array<UserInterest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserInterest = {
  __typename: "UserInterest",
  id: string,
  userProfileId: string,
  interest: Interest,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userInterestInterestId: string,
};

export type Interest = {
  __typename: "Interest",
  id: string,
  name: string,
  searchName: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserSkillConnection = {
  __typename: "ModelUserSkillConnection",
  items:  Array<UserSkill | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserSkill = {
  __typename: "UserSkill",
  id: string,
  userProfileId: string,
  skill: Skill,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userSkillSkillId: string,
};

export type Skill = {
  __typename: "Skill",
  id: string,
  name: string,
  searchName: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserNotificationConnection = {
  __typename: "ModelUserNotificationConnection",
  items:  Array<UserNotification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserNotification = {
  __typename: "UserNotification",
  id: string,
  userProfileId: string,
  message: string,
  level: UserNotificationLevel,
  displayedAt?: string | null,
  heading?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum UserNotificationLevel {
  NORMAL = "NORMAL",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
}


export type UpdateUserProfileInput = {
  id: string,
  userId?: string | null,
  visibility?: UserProfileVisibility | null,
  name?: string | null,
  searchName?: string | null,
  tagline?: string | null,
  about?: string | null,
  _version?: number | null,
};

export type DeleteUserProfileInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserSkillInput = {
  id?: string | null,
  userProfileId: string,
  _version?: number | null,
  userSkillSkillId: string,
};

export type ModelUserSkillConditionInput = {
  userProfileId?: ModelIDInput | null,
  and?: Array< ModelUserSkillConditionInput | null > | null,
  or?: Array< ModelUserSkillConditionInput | null > | null,
  not?: ModelUserSkillConditionInput | null,
  userSkillSkillId?: ModelIDInput | null,
};

export type UpdateUserSkillInput = {
  id: string,
  userProfileId?: string | null,
  _version?: number | null,
  userSkillSkillId?: string | null,
};

export type DeleteUserSkillInput = {
  id: string,
  _version?: number | null,
};

export type CreateSkillInput = {
  id?: string | null,
  name: string,
  searchName: string,
  _version?: number | null,
};

export type ModelSkillConditionInput = {
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  and?: Array< ModelSkillConditionInput | null > | null,
  or?: Array< ModelSkillConditionInput | null > | null,
  not?: ModelSkillConditionInput | null,
};

export type UpdateSkillInput = {
  id: string,
  name?: string | null,
  searchName?: string | null,
  _version?: number | null,
};

export type DeleteSkillInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInterestInput = {
  id?: string | null,
  userProfileId: string,
  _version?: number | null,
  userInterestInterestId: string,
};

export type ModelUserInterestConditionInput = {
  userProfileId?: ModelIDInput | null,
  and?: Array< ModelUserInterestConditionInput | null > | null,
  or?: Array< ModelUserInterestConditionInput | null > | null,
  not?: ModelUserInterestConditionInput | null,
  userInterestInterestId?: ModelIDInput | null,
};

export type UpdateUserInterestInput = {
  id: string,
  userProfileId?: string | null,
  _version?: number | null,
  userInterestInterestId?: string | null,
};

export type DeleteUserInterestInput = {
  id: string,
  _version?: number | null,
};

export type CreateInterestInput = {
  id?: string | null,
  name: string,
  searchName: string,
  _version?: number | null,
};

export type ModelInterestConditionInput = {
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  and?: Array< ModelInterestConditionInput | null > | null,
  or?: Array< ModelInterestConditionInput | null > | null,
  not?: ModelInterestConditionInput | null,
};

export type UpdateInterestInput = {
  id: string,
  name?: string | null,
  searchName?: string | null,
  _version?: number | null,
};

export type DeleteInterestInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserNotificationInput = {
  id?: string | null,
  userProfileId: string,
  message: string,
  level: UserNotificationLevel,
  displayedAt?: string | null,
  heading?: string | null,
  _version?: number | null,
};

export type ModelUserNotificationConditionInput = {
  userProfileId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  level?: ModelUserNotificationLevelInput | null,
  displayedAt?: ModelStringInput | null,
  heading?: ModelStringInput | null,
  and?: Array< ModelUserNotificationConditionInput | null > | null,
  or?: Array< ModelUserNotificationConditionInput | null > | null,
  not?: ModelUserNotificationConditionInput | null,
};

export type ModelUserNotificationLevelInput = {
  eq?: UserNotificationLevel | null,
  ne?: UserNotificationLevel | null,
};

export type UpdateUserNotificationInput = {
  id: string,
  userProfileId?: string | null,
  message?: string | null,
  level?: UserNotificationLevel | null,
  displayedAt?: string | null,
  heading?: string | null,
  _version?: number | null,
};

export type DeleteUserNotificationInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  visibility?: ModelUserProfileVisibilityInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserSkillFilterInput = {
  id?: ModelIDInput | null,
  userProfileId?: ModelIDInput | null,
  and?: Array< ModelUserSkillFilterInput | null > | null,
  or?: Array< ModelUserSkillFilterInput | null > | null,
  not?: ModelUserSkillFilterInput | null,
  userSkillSkillId?: ModelIDInput | null,
};

export type ModelSkillFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  and?: Array< ModelSkillFilterInput | null > | null,
  or?: Array< ModelSkillFilterInput | null > | null,
  not?: ModelSkillFilterInput | null,
};

export type ModelSkillConnection = {
  __typename: "ModelSkillConnection",
  items:  Array<Skill | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserInterestFilterInput = {
  id?: ModelIDInput | null,
  userProfileId?: ModelIDInput | null,
  and?: Array< ModelUserInterestFilterInput | null > | null,
  or?: Array< ModelUserInterestFilterInput | null > | null,
  not?: ModelUserInterestFilterInput | null,
  userInterestInterestId?: ModelIDInput | null,
};

export type ModelInterestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  and?: Array< ModelInterestFilterInput | null > | null,
  or?: Array< ModelInterestFilterInput | null > | null,
  not?: ModelInterestFilterInput | null,
};

export type ModelInterestConnection = {
  __typename: "ModelInterestConnection",
  items:  Array<Interest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserNotificationFilterInput = {
  id?: ModelIDInput | null,
  userProfileId?: ModelIDInput | null,
  message?: ModelStringInput | null,
  level?: ModelUserNotificationLevelInput | null,
  displayedAt?: ModelStringInput | null,
  heading?: ModelStringInput | null,
  and?: Array< ModelUserNotificationFilterInput | null > | null,
  or?: Array< ModelUserNotificationFilterInput | null > | null,
  not?: ModelUserNotificationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  searchName?: ModelSubscriptionStringInput | null,
  tagline?: ModelSubscriptionStringInput | null,
  about?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSkillFilterInput | null > | null,
};

export type ModelSubscriptionSkillFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  searchName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSkillFilterInput | null > | null,
  or?: Array< ModelSubscriptionSkillFilterInput | null > | null,
};

export type ModelSubscriptionUserInterestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserInterestFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserInterestFilterInput | null > | null,
};

export type ModelSubscriptionInterestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  searchName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInterestFilterInput | null > | null,
  or?: Array< ModelSubscriptionInterestFilterInput | null > | null,
};

export type ModelSubscriptionUserNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userProfileId?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  displayedAt?: ModelSubscriptionStringInput | null,
  heading?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserNotificationFilterInput | null > | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserSkillMutationVariables = {
  input: CreateUserSkillInput,
  condition?: ModelUserSkillConditionInput | null,
};

export type CreateUserSkillMutation = {
  createUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type UpdateUserSkillMutationVariables = {
  input: UpdateUserSkillInput,
  condition?: ModelUserSkillConditionInput | null,
};

export type UpdateUserSkillMutation = {
  updateUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type DeleteUserSkillMutationVariables = {
  input: DeleteUserSkillInput,
  condition?: ModelUserSkillConditionInput | null,
};

export type DeleteUserSkillMutation = {
  deleteUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type CreateSkillMutationVariables = {
  input: CreateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type CreateSkillMutation = {
  createSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSkillMutationVariables = {
  input: UpdateSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type UpdateSkillMutation = {
  updateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSkillMutationVariables = {
  input: DeleteSkillInput,
  condition?: ModelSkillConditionInput | null,
};

export type DeleteSkillMutation = {
  deleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserInterestMutationVariables = {
  input: CreateUserInterestInput,
  condition?: ModelUserInterestConditionInput | null,
};

export type CreateUserInterestMutation = {
  createUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type UpdateUserInterestMutationVariables = {
  input: UpdateUserInterestInput,
  condition?: ModelUserInterestConditionInput | null,
};

export type UpdateUserInterestMutation = {
  updateUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type DeleteUserInterestMutationVariables = {
  input: DeleteUserInterestInput,
  condition?: ModelUserInterestConditionInput | null,
};

export type DeleteUserInterestMutation = {
  deleteUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type CreateInterestMutationVariables = {
  input: CreateInterestInput,
  condition?: ModelInterestConditionInput | null,
};

export type CreateInterestMutation = {
  createInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateInterestMutationVariables = {
  input: UpdateInterestInput,
  condition?: ModelInterestConditionInput | null,
};

export type UpdateInterestMutation = {
  updateInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteInterestMutationVariables = {
  input: DeleteInterestInput,
  condition?: ModelInterestConditionInput | null,
};

export type DeleteInterestMutation = {
  deleteInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserNotificationMutationVariables = {
  input: CreateUserNotificationInput,
  condition?: ModelUserNotificationConditionInput | null,
};

export type CreateUserNotificationMutation = {
  createUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserNotificationMutationVariables = {
  input: UpdateUserNotificationInput,
  condition?: ModelUserNotificationConditionInput | null,
};

export type UpdateUserNotificationMutation = {
  updateUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserNotificationMutationVariables = {
  input: DeleteUserNotificationInput,
  condition?: ModelUserNotificationConditionInput | null,
};

export type DeleteUserNotificationMutation = {
  deleteUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      visibility: UserProfileVisibility,
      name: string,
      searchName: string,
      tagline?: string | null,
      about?: string | null,
      interests?:  {
        __typename: "ModelUserInterestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      skills?:  {
        __typename: "ModelUserSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notifications?:  {
        __typename: "ModelUserNotificationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserProfilesQuery = {
  syncUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      visibility: UserProfileVisibility,
      name: string,
      searchName: string,
      tagline?: string | null,
      about?: string | null,
      interests?:  {
        __typename: "ModelUserInterestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      skills?:  {
        __typename: "ModelUserSkillConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notifications?:  {
        __typename: "ModelUserNotificationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserSkillQueryVariables = {
  id: string,
};

export type GetUserSkillQuery = {
  getUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type ListUserSkillsQueryVariables = {
  filter?: ModelUserSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSkillsQuery = {
  listUserSkills?:  {
    __typename: "ModelUserSkillConnection",
    items:  Array< {
      __typename: "UserSkill",
      id: string,
      userProfileId: string,
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        searchName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userSkillSkillId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserSkillsQueryVariables = {
  filter?: ModelUserSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserSkillsQuery = {
  syncUserSkills?:  {
    __typename: "ModelUserSkillConnection",
    items:  Array< {
      __typename: "UserSkill",
      id: string,
      userProfileId: string,
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        searchName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userSkillSkillId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSkillQueryVariables = {
  id: string,
};

export type GetSkillQuery = {
  getSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSkillsQuery = {
  listSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSkillsQueryVariables = {
  filter?: ModelSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSkillsQuery = {
  syncSkills?:  {
    __typename: "ModelSkillConnection",
    items:  Array< {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserInterestQueryVariables = {
  id: string,
};

export type GetUserInterestQuery = {
  getUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type ListUserInterestsQueryVariables = {
  filter?: ModelUserInterestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInterestsQuery = {
  listUserInterests?:  {
    __typename: "ModelUserInterestConnection",
    items:  Array< {
      __typename: "UserInterest",
      id: string,
      userProfileId: string,
      interest:  {
        __typename: "Interest",
        id: string,
        name: string,
        searchName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userInterestInterestId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserInterestsQueryVariables = {
  filter?: ModelUserInterestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserInterestsQuery = {
  syncUserInterests?:  {
    __typename: "ModelUserInterestConnection",
    items:  Array< {
      __typename: "UserInterest",
      id: string,
      userProfileId: string,
      interest:  {
        __typename: "Interest",
        id: string,
        name: string,
        searchName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userInterestInterestId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetInterestQueryVariables = {
  id: string,
};

export type GetInterestQuery = {
  getInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListInterestsQueryVariables = {
  filter?: ModelInterestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInterestsQuery = {
  listInterests?:  {
    __typename: "ModelInterestConnection",
    items:  Array< {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncInterestsQueryVariables = {
  filter?: ModelInterestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncInterestsQuery = {
  syncInterests?:  {
    __typename: "ModelInterestConnection",
    items:  Array< {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserNotificationQueryVariables = {
  id: string,
};

export type GetUserNotificationQuery = {
  getUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserNotificationsQueryVariables = {
  filter?: ModelUserNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserNotificationsQuery = {
  listUserNotifications?:  {
    __typename: "ModelUserNotificationConnection",
    items:  Array< {
      __typename: "UserNotification",
      id: string,
      userProfileId: string,
      message: string,
      level: UserNotificationLevel,
      displayedAt?: string | null,
      heading?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserNotificationsQueryVariables = {
  filter?: ModelUserNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserNotificationsQuery = {
  syncUserNotifications?:  {
    __typename: "ModelUserNotificationConnection",
    items:  Array< {
      __typename: "UserNotification",
      id: string,
      userProfileId: string,
      message: string,
      level: UserNotificationLevel,
      displayedAt?: string | null,
      heading?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserSkillsByUserProfileIdQueryVariables = {
  userProfileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserSkillFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserSkillsByUserProfileIdQuery = {
  userSkillsByUserProfileId?:  {
    __typename: "ModelUserSkillConnection",
    items:  Array< {
      __typename: "UserSkill",
      id: string,
      userProfileId: string,
      skill:  {
        __typename: "Skill",
        id: string,
        name: string,
        searchName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userSkillSkillId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserInterestsByUserProfileIdQueryVariables = {
  userProfileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserInterestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserInterestsByUserProfileIdQuery = {
  userInterestsByUserProfileId?:  {
    __typename: "ModelUserInterestConnection",
    items:  Array< {
      __typename: "UserInterest",
      id: string,
      userProfileId: string,
      interest:  {
        __typename: "Interest",
        id: string,
        name: string,
        searchName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userInterestInterestId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserNotificationsByUserProfileIdQueryVariables = {
  userProfileId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserNotificationsByUserProfileIdQuery = {
  userNotificationsByUserProfileId?:  {
    __typename: "ModelUserNotificationConnection",
    items:  Array< {
      __typename: "UserNotification",
      id: string,
      userProfileId: string,
      message: string,
      level: UserNotificationLevel,
      displayedAt?: string | null,
      heading?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    tagline?: string | null,
    about?: string | null,
    interests?:  {
      __typename: "ModelUserInterestConnection",
      items:  Array< {
        __typename: "UserInterest",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userInterestInterestId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    skills?:  {
      __typename: "ModelUserSkillConnection",
      items:  Array< {
        __typename: "UserSkill",
        id: string,
        userProfileId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userSkillSkillId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notifications?:  {
      __typename: "ModelUserNotificationConnection",
      items:  Array< {
        __typename: "UserNotification",
        id: string,
        userProfileId: string,
        message: string,
        level: UserNotificationLevel,
        displayedAt?: string | null,
        heading?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSkillSubscriptionVariables = {
  filter?: ModelSubscriptionUserSkillFilterInput | null,
};

export type OnCreateUserSkillSubscription = {
  onCreateUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type OnUpdateUserSkillSubscriptionVariables = {
  filter?: ModelSubscriptionUserSkillFilterInput | null,
};

export type OnUpdateUserSkillSubscription = {
  onUpdateUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type OnDeleteUserSkillSubscriptionVariables = {
  filter?: ModelSubscriptionUserSkillFilterInput | null,
};

export type OnDeleteUserSkillSubscription = {
  onDeleteUserSkill?:  {
    __typename: "UserSkill",
    id: string,
    userProfileId: string,
    skill:  {
      __typename: "Skill",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userSkillSkillId: string,
  } | null,
};

export type OnCreateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnCreateSkillSubscription = {
  onCreateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnUpdateSkillSubscription = {
  onUpdateSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSkillSubscriptionVariables = {
  filter?: ModelSubscriptionSkillFilterInput | null,
};

export type OnDeleteSkillSubscription = {
  onDeleteSkill?:  {
    __typename: "Skill",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserInterestSubscriptionVariables = {
  filter?: ModelSubscriptionUserInterestFilterInput | null,
};

export type OnCreateUserInterestSubscription = {
  onCreateUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type OnUpdateUserInterestSubscriptionVariables = {
  filter?: ModelSubscriptionUserInterestFilterInput | null,
};

export type OnUpdateUserInterestSubscription = {
  onUpdateUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type OnDeleteUserInterestSubscriptionVariables = {
  filter?: ModelSubscriptionUserInterestFilterInput | null,
};

export type OnDeleteUserInterestSubscription = {
  onDeleteUserInterest?:  {
    __typename: "UserInterest",
    id: string,
    userProfileId: string,
    interest:  {
      __typename: "Interest",
      id: string,
      name: string,
      searchName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userInterestInterestId: string,
  } | null,
};

export type OnCreateInterestSubscriptionVariables = {
  filter?: ModelSubscriptionInterestFilterInput | null,
};

export type OnCreateInterestSubscription = {
  onCreateInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateInterestSubscriptionVariables = {
  filter?: ModelSubscriptionInterestFilterInput | null,
};

export type OnUpdateInterestSubscription = {
  onUpdateInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteInterestSubscriptionVariables = {
  filter?: ModelSubscriptionInterestFilterInput | null,
};

export type OnDeleteInterestSubscription = {
  onDeleteInterest?:  {
    __typename: "Interest",
    id: string,
    name: string,
    searchName: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationFilterInput | null,
};

export type OnCreateUserNotificationSubscription = {
  onCreateUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationFilterInput | null,
};

export type OnUpdateUserNotificationSubscription = {
  onUpdateUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionUserNotificationFilterInput | null,
};

export type OnDeleteUserNotificationSubscription = {
  onDeleteUserNotification?:  {
    __typename: "UserNotification",
    id: string,
    userProfileId: string,
    message: string,
    level: UserNotificationLevel,
    displayedAt?: string | null,
    heading?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
