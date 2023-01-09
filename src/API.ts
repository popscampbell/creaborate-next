/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserProfileInput = {
  id?: string | null,
  username: string,
  visibility: UserProfileVisibility,
  name: string,
  searchName: string,
  profileImage?: ImageInput | null,
  tagline?: string | null,
  about?: string | null,
  _version?: number | null,
};

export enum UserProfileVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED",
}


export type ImageInput = {
  storageKey: string,
  alt: string,
  searchAlt: string,
  caption?: string | null,
  searchCaption?: string | null,
  detail?: string | null,
  searchDetail?: string | null,
};

export type ModelUserProfileConditionInput = {
  username?: ModelStringInput | null,
  visibility?: ModelUserProfileVisibilityInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  tagline?: ModelStringInput | null,
  about?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
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

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  username: string,
  visibility: UserProfileVisibility,
  name: string,
  searchName: string,
  profileImage?: Image | null,
  tagline?: string | null,
  about?: string | null,
  interests?: ModelUserInterestConnection | null,
  skills?: ModelUserSkillConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Image = {
  __typename: "Image",
  storageKey: string,
  alt: string,
  searchAlt: string,
  caption?: string | null,
  searchCaption?: string | null,
  detail?: string | null,
  searchDetail?: string | null,
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

export type UpdateUserProfileInput = {
  id: string,
  username?: string | null,
  visibility?: UserProfileVisibility | null,
  name?: string | null,
  searchName?: string | null,
  profileImage?: ImageInput | null,
  tagline?: string | null,
  about?: string | null,
  _version?: number | null,
};

export type DeleteUserProfileInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserImageInput = {
  id?: string | null,
  username: string,
  image: ImageInput,
  _version?: number | null,
};

export type ModelUserImageConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUserImageConditionInput | null > | null,
  or?: Array< ModelUserImageConditionInput | null > | null,
  not?: ModelUserImageConditionInput | null,
};

export type UserImage = {
  __typename: "UserImage",
  id: string,
  username: string,
  image: Image,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserImageInput = {
  id: string,
  username?: string | null,
  image?: ImageInput | null,
  _version?: number | null,
};

export type DeleteUserImageInput = {
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
  username: string,
  message: string,
  level: UserNotificationLevel,
  displayedAt?: string | null,
  heading?: string | null,
  _version?: number | null,
};

export enum UserNotificationLevel {
  NORMAL = "NORMAL",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
}


export type ModelUserNotificationConditionInput = {
  username?: ModelStringInput | null,
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

export type UserNotification = {
  __typename: "UserNotification",
  id: string,
  username: string,
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

export type UpdateUserNotificationInput = {
  id: string,
  username?: string | null,
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

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  searchName: string,
  visibility: TeamVisibility,
  teamType: TeamType,
  customTeamType?: string | null,
  description: string,
  _version?: number | null,
};

export enum TeamVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED",
}


export enum TeamType {
  TEAM = "TEAM",
  BAND = "BAND",
  GROUP = "GROUP",
  CUSTOM = "CUSTOM",
}


export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  visibility?: ModelTeamVisibilityInput | null,
  teamType?: ModelTeamTypeInput | null,
  customTeamType?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type ModelTeamVisibilityInput = {
  eq?: TeamVisibility | null,
  ne?: TeamVisibility | null,
};

export type ModelTeamTypeInput = {
  eq?: TeamType | null,
  ne?: TeamType | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  searchName: string,
  visibility: TeamVisibility,
  teamType: TeamType,
  customTeamType?: string | null,
  description: string,
  teamMembers?: ModelTeamMemberConnection | null,
  invitations?: ModelTeamInvitationConnection | null,
  tasks?: ModelTaskConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTeamMemberConnection = {
  __typename: "ModelTeamMemberConnection",
  items:  Array<TeamMember | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TeamMember = {
  __typename: "TeamMember",
  id: string,
  teamId: string,
  username: string,
  role: TeamMemberRole,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TeamMemberRole {
  ADMINISTRATOR = "ADMINISTRATOR",
  MEMBER = "MEMBER",
}


export type ModelTeamInvitationConnection = {
  __typename: "ModelTeamInvitationConnection",
  items:  Array<TeamInvitation | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TeamInvitation = {
  __typename: "TeamInvitation",
  id: string,
  teamId: string,
  role: TeamMemberRole,
  status: TeamInvitationStatus,
  username: string,
  externalEmail?: string | null,
  invitedByUsername?: string | null,
  responseDateTime?: string | null,
  responseComment?: string | null,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TeamInvitationStatus {
  SENT = "SENT",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  EXPIRED = "EXPIRED",
}


export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  teamId: string,
  name: string,
  searchName: string,
  description?: string | null,
  searchDescription?: string | null,
  dueDate?: string | null,
  status: TaskStatus,
  priority: TaskPriority,
  completedByUsername?: string | null,
  completedDate?: string | null,
  comments?: ModelTaskCommentConnection | null,
  ownerUsername?: string | null,
  startDate?: string | null,
  team?: Team | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum TaskStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  ARCHIVED = "ARCHIVED",
}


export enum TaskPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}


export type ModelTaskCommentConnection = {
  __typename: "ModelTaskCommentConnection",
  items:  Array<TaskComment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TaskComment = {
  __typename: "TaskComment",
  id: string,
  taskId: string,
  comment: Comment,
  task?: Task | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Comment = {
  __typename: "Comment",
  comment: string,
  searchComment: string,
  postedByUsername: string,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  searchName?: string | null,
  visibility?: TeamVisibility | null,
  teamType?: TeamType | null,
  customTeamType?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTeamInput = {
  id: string,
  _version?: number | null,
};

export type CreateTeamMemberInput = {
  id?: string | null,
  teamId: string,
  username: string,
  role: TeamMemberRole,
  _version?: number | null,
};

export type ModelTeamMemberConditionInput = {
  teamId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  role?: ModelTeamMemberRoleInput | null,
  and?: Array< ModelTeamMemberConditionInput | null > | null,
  or?: Array< ModelTeamMemberConditionInput | null > | null,
  not?: ModelTeamMemberConditionInput | null,
};

export type ModelTeamMemberRoleInput = {
  eq?: TeamMemberRole | null,
  ne?: TeamMemberRole | null,
};

export type UpdateTeamMemberInput = {
  id: string,
  teamId?: string | null,
  username?: string | null,
  role?: TeamMemberRole | null,
  _version?: number | null,
};

export type DeleteTeamMemberInput = {
  id: string,
  _version?: number | null,
};

export type CreateTeamInvitationInput = {
  id?: string | null,
  teamId: string,
  role: TeamMemberRole,
  status: TeamInvitationStatus,
  username: string,
  externalEmail?: string | null,
  invitedByUsername?: string | null,
  responseDateTime?: string | null,
  responseComment?: string | null,
  _version?: number | null,
};

export type ModelTeamInvitationConditionInput = {
  teamId?: ModelIDInput | null,
  role?: ModelTeamMemberRoleInput | null,
  status?: ModelTeamInvitationStatusInput | null,
  username?: ModelStringInput | null,
  externalEmail?: ModelStringInput | null,
  invitedByUsername?: ModelStringInput | null,
  responseDateTime?: ModelStringInput | null,
  responseComment?: ModelStringInput | null,
  and?: Array< ModelTeamInvitationConditionInput | null > | null,
  or?: Array< ModelTeamInvitationConditionInput | null > | null,
  not?: ModelTeamInvitationConditionInput | null,
};

export type ModelTeamInvitationStatusInput = {
  eq?: TeamInvitationStatus | null,
  ne?: TeamInvitationStatus | null,
};

export type UpdateTeamInvitationInput = {
  id: string,
  teamId?: string | null,
  role?: TeamMemberRole | null,
  status?: TeamInvitationStatus | null,
  username?: string | null,
  externalEmail?: string | null,
  invitedByUsername?: string | null,
  responseDateTime?: string | null,
  responseComment?: string | null,
  _version?: number | null,
};

export type DeleteTeamInvitationInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskInput = {
  id?: string | null,
  teamId: string,
  name: string,
  searchName: string,
  description?: string | null,
  searchDescription?: string | null,
  dueDate?: string | null,
  status: TaskStatus,
  priority: TaskPriority,
  completedByUsername?: string | null,
  completedDate?: string | null,
  ownerUsername?: string | null,
  startDate?: string | null,
  _version?: number | null,
};

export type ModelTaskConditionInput = {
  teamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  searchDescription?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  status?: ModelTaskStatusInput | null,
  priority?: ModelTaskPriorityInput | null,
  completedByUsername?: ModelStringInput | null,
  completedDate?: ModelStringInput | null,
  ownerUsername?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelTaskStatusInput = {
  eq?: TaskStatus | null,
  ne?: TaskStatus | null,
};

export type ModelTaskPriorityInput = {
  eq?: TaskPriority | null,
  ne?: TaskPriority | null,
};

export type UpdateTaskInput = {
  id: string,
  teamId?: string | null,
  name?: string | null,
  searchName?: string | null,
  description?: string | null,
  searchDescription?: string | null,
  dueDate?: string | null,
  status?: TaskStatus | null,
  priority?: TaskPriority | null,
  completedByUsername?: string | null,
  completedDate?: string | null,
  ownerUsername?: string | null,
  startDate?: string | null,
  _version?: number | null,
};

export type DeleteTaskInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskCommentInput = {
  id?: string | null,
  taskId: string,
  comment: CommentInput,
  _version?: number | null,
};

export type CommentInput = {
  comment: string,
  searchComment: string,
  postedByUsername: string,
};

export type ModelTaskCommentConditionInput = {
  taskId?: ModelIDInput | null,
  and?: Array< ModelTaskCommentConditionInput | null > | null,
  or?: Array< ModelTaskCommentConditionInput | null > | null,
  not?: ModelTaskCommentConditionInput | null,
};

export type UpdateTaskCommentInput = {
  id: string,
  taskId?: string | null,
  comment?: CommentInput | null,
  _version?: number | null,
};

export type DeleteTaskCommentInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
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

export type ModelUserImageFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserImageFilterInput | null > | null,
  or?: Array< ModelUserImageFilterInput | null > | null,
  not?: ModelUserImageFilterInput | null,
};

export type ModelUserImageConnection = {
  __typename: "ModelUserImageConnection",
  items:  Array<UserImage | null >,
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
  username?: ModelStringInput | null,
  message?: ModelStringInput | null,
  level?: ModelUserNotificationLevelInput | null,
  displayedAt?: ModelStringInput | null,
  heading?: ModelStringInput | null,
  and?: Array< ModelUserNotificationFilterInput | null > | null,
  or?: Array< ModelUserNotificationFilterInput | null > | null,
  not?: ModelUserNotificationFilterInput | null,
};

export type ModelUserNotificationConnection = {
  __typename: "ModelUserNotificationConnection",
  items:  Array<UserNotification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  visibility?: ModelTeamVisibilityInput | null,
  teamType?: ModelTeamTypeInput | null,
  customTeamType?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTeamMemberFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  username?: ModelStringInput | null,
  role?: ModelTeamMemberRoleInput | null,
  and?: Array< ModelTeamMemberFilterInput | null > | null,
  or?: Array< ModelTeamMemberFilterInput | null > | null,
  not?: ModelTeamMemberFilterInput | null,
};

export type ModelTeamInvitationFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  role?: ModelTeamMemberRoleInput | null,
  status?: ModelTeamInvitationStatusInput | null,
  username?: ModelStringInput | null,
  externalEmail?: ModelStringInput | null,
  invitedByUsername?: ModelStringInput | null,
  responseDateTime?: ModelStringInput | null,
  responseComment?: ModelStringInput | null,
  and?: Array< ModelTeamInvitationFilterInput | null > | null,
  or?: Array< ModelTeamInvitationFilterInput | null > | null,
  not?: ModelTeamInvitationFilterInput | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  searchName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  searchDescription?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  status?: ModelTaskStatusInput | null,
  priority?: ModelTaskPriorityInput | null,
  completedByUsername?: ModelStringInput | null,
  completedDate?: ModelStringInput | null,
  ownerUsername?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelTaskCommentFilterInput = {
  id?: ModelIDInput | null,
  taskId?: ModelIDInput | null,
  and?: Array< ModelTaskCommentFilterInput | null > | null,
  or?: Array< ModelTaskCommentFilterInput | null > | null,
  not?: ModelTaskCommentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionUserImageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserImageFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserImageFilterInput | null > | null,
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
  username?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionStringInput | null,
  displayedAt?: ModelSubscriptionStringInput | null,
  heading?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserNotificationFilterInput | null > | null,
};

export type ModelSubscriptionTeamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  searchName?: ModelSubscriptionStringInput | null,
  visibility?: ModelSubscriptionStringInput | null,
  teamType?: ModelSubscriptionStringInput | null,
  customTeamType?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamFilterInput | null > | null,
};

export type ModelSubscriptionTeamMemberFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamMemberFilterInput | null > | null,
};

export type ModelSubscriptionTeamInvitationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  role?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  externalEmail?: ModelSubscriptionStringInput | null,
  invitedByUsername?: ModelSubscriptionStringInput | null,
  responseDateTime?: ModelSubscriptionStringInput | null,
  responseComment?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTeamInvitationFilterInput | null > | null,
  or?: Array< ModelSubscriptionTeamInvitationFilterInput | null > | null,
};

export type ModelSubscriptionTaskFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  teamId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  searchName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  searchDescription?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  priority?: ModelSubscriptionStringInput | null,
  completedByUsername?: ModelSubscriptionStringInput | null,
  completedDate?: ModelSubscriptionStringInput | null,
  ownerUsername?: ModelSubscriptionStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTaskFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskFilterInput | null > | null,
};

export type ModelSubscriptionTaskCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  taskId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTaskCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionTaskCommentFilterInput | null > | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserImageMutationVariables = {
  input: CreateUserImageInput,
  condition?: ModelUserImageConditionInput | null,
};

export type CreateUserImageMutation = {
  createUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserImageMutationVariables = {
  input: UpdateUserImageInput,
  condition?: ModelUserImageConditionInput | null,
};

export type UpdateUserImageMutation = {
  updateUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserImageMutationVariables = {
  input: DeleteUserImageInput,
  condition?: ModelUserImageConditionInput | null,
};

export type DeleteUserImageMutation = {
  deleteUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
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
    username: string,
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
    username: string,
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
    username: string,
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

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type CreateTeamMemberMutationVariables = {
  input: CreateTeamMemberInput,
  condition?: ModelTeamMemberConditionInput | null,
};

export type CreateTeamMemberMutation = {
  createTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTeamMemberMutationVariables = {
  input: UpdateTeamMemberInput,
  condition?: ModelTeamMemberConditionInput | null,
};

export type UpdateTeamMemberMutation = {
  updateTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTeamMemberMutationVariables = {
  input: DeleteTeamMemberInput,
  condition?: ModelTeamMemberConditionInput | null,
};

export type DeleteTeamMemberMutation = {
  deleteTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTeamInvitationMutationVariables = {
  input: CreateTeamInvitationInput,
  condition?: ModelTeamInvitationConditionInput | null,
};

export type CreateTeamInvitationMutation = {
  createTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTeamInvitationMutationVariables = {
  input: UpdateTeamInvitationInput,
  condition?: ModelTeamInvitationConditionInput | null,
};

export type UpdateTeamInvitationMutation = {
  updateTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTeamInvitationMutationVariables = {
  input: DeleteTeamInvitationInput,
  condition?: ModelTeamInvitationConditionInput | null,
};

export type DeleteTeamInvitationMutation = {
  deleteTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTaskCommentMutationVariables = {
  input: CreateTaskCommentInput,
  condition?: ModelTaskCommentConditionInput | null,
};

export type CreateTaskCommentMutation = {
  createTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTaskCommentMutationVariables = {
  input: UpdateTaskCommentInput,
  condition?: ModelTaskCommentConditionInput | null,
};

export type UpdateTaskCommentMutation = {
  updateTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTaskCommentMutationVariables = {
  input: DeleteTaskCommentInput,
  condition?: ModelTaskCommentConditionInput | null,
};

export type DeleteTaskCommentMutation = {
  deleteTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
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
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
      username: string,
      visibility: UserProfileVisibility,
      name: string,
      searchName: string,
      profileImage?:  {
        __typename: "Image",
        storageKey: string,
        alt: string,
        searchAlt: string,
        caption?: string | null,
        searchCaption?: string | null,
        detail?: string | null,
        searchDetail?: string | null,
      } | null,
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
      username: string,
      visibility: UserProfileVisibility,
      name: string,
      searchName: string,
      profileImage?:  {
        __typename: "Image",
        storageKey: string,
        alt: string,
        searchAlt: string,
        caption?: string | null,
        searchCaption?: string | null,
        detail?: string | null,
        searchDetail?: string | null,
      } | null,
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

export type GetUserImageQueryVariables = {
  id: string,
};

export type GetUserImageQuery = {
  getUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserImagesQueryVariables = {
  filter?: ModelUserImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserImagesQuery = {
  listUserImages?:  {
    __typename: "ModelUserImageConnection",
    items:  Array< {
      __typename: "UserImage",
      id: string,
      username: string,
      image:  {
        __typename: "Image",
        storageKey: string,
        alt: string,
        searchAlt: string,
        caption?: string | null,
        searchCaption?: string | null,
        detail?: string | null,
        searchDetail?: string | null,
      },
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

export type SyncUserImagesQueryVariables = {
  filter?: ModelUserImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserImagesQuery = {
  syncUserImages?:  {
    __typename: "ModelUserImageConnection",
    items:  Array< {
      __typename: "UserImage",
      id: string,
      username: string,
      image:  {
        __typename: "Image",
        storageKey: string,
        alt: string,
        searchAlt: string,
        caption?: string | null,
        searchCaption?: string | null,
        detail?: string | null,
        searchDetail?: string | null,
      },
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
    username: string,
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
      username: string,
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
      username: string,
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

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
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

export type SyncTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeamsQuery = {
  syncTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
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

export type GetTeamMemberQueryVariables = {
  id: string,
};

export type GetTeamMemberQuery = {
  getTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTeamMembersQueryVariables = {
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamMembersQuery = {
  listTeamMembers?:  {
    __typename: "ModelTeamMemberConnection",
    items:  Array< {
      __typename: "TeamMember",
      id: string,
      teamId: string,
      username: string,
      role: TeamMemberRole,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type SyncTeamMembersQueryVariables = {
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeamMembersQuery = {
  syncTeamMembers?:  {
    __typename: "ModelTeamMemberConnection",
    items:  Array< {
      __typename: "TeamMember",
      id: string,
      teamId: string,
      username: string,
      role: TeamMemberRole,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type GetTeamInvitationQueryVariables = {
  id: string,
};

export type GetTeamInvitationQuery = {
  getTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTeamInvitationsQueryVariables = {
  filter?: ModelTeamInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamInvitationsQuery = {
  listTeamInvitations?:  {
    __typename: "ModelTeamInvitationConnection",
    items:  Array< {
      __typename: "TeamInvitation",
      id: string,
      teamId: string,
      role: TeamMemberRole,
      status: TeamInvitationStatus,
      username: string,
      externalEmail?: string | null,
      invitedByUsername?: string | null,
      responseDateTime?: string | null,
      responseComment?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type SyncTeamInvitationsQueryVariables = {
  filter?: ModelTeamInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeamInvitationsQuery = {
  syncTeamInvitations?:  {
    __typename: "ModelTeamInvitationConnection",
    items:  Array< {
      __typename: "TeamInvitation",
      id: string,
      teamId: string,
      role: TeamMemberRole,
      status: TeamInvitationStatus,
      username: string,
      externalEmail?: string | null,
      invitedByUsername?: string | null,
      responseDateTime?: string | null,
      responseComment?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type GetTaskCommentQueryVariables = {
  id: string,
};

export type GetTaskCommentQuery = {
  getTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTaskCommentsQueryVariables = {
  filter?: ModelTaskCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaskCommentsQuery = {
  listTaskComments?:  {
    __typename: "ModelTaskCommentConnection",
    items:  Array< {
      __typename: "TaskComment",
      id: string,
      taskId: string,
      comment:  {
        __typename: "Comment",
        comment: string,
        searchComment: string,
        postedByUsername: string,
      },
      task?:  {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type SyncTaskCommentsQueryVariables = {
  filter?: ModelTaskCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTaskCommentsQuery = {
  syncTaskComments?:  {
    __typename: "ModelTaskCommentConnection",
    items:  Array< {
      __typename: "TaskComment",
      id: string,
      taskId: string,
      comment:  {
        __typename: "Comment",
        comment: string,
        searchComment: string,
        postedByUsername: string,
      },
      task?:  {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type TeamMembersByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamMembersByTeamIdQuery = {
  teamMembersByTeamId?:  {
    __typename: "ModelTeamMemberConnection",
    items:  Array< {
      __typename: "TeamMember",
      id: string,
      teamId: string,
      username: string,
      role: TeamMemberRole,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type TeamInvitationsByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTeamInvitationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TeamInvitationsByTeamIdQuery = {
  teamInvitationsByTeamId?:  {
    __typename: "ModelTeamInvitationConnection",
    items:  Array< {
      __typename: "TeamInvitation",
      id: string,
      teamId: string,
      role: TeamMemberRole,
      status: TeamInvitationStatus,
      username: string,
      externalEmail?: string | null,
      invitedByUsername?: string | null,
      responseDateTime?: string | null,
      responseComment?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type TasksByTeamIdQueryVariables = {
  teamId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TasksByTeamIdQuery = {
  tasksByTeamId?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type TaskCommentsByTaskIdQueryVariables = {
  taskId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTaskCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TaskCommentsByTaskIdQuery = {
  taskCommentsByTaskId?:  {
    __typename: "ModelTaskCommentConnection",
    items:  Array< {
      __typename: "TaskComment",
      id: string,
      taskId: string,
      comment:  {
        __typename: "Comment",
        comment: string,
        searchComment: string,
        postedByUsername: string,
      },
      task?:  {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
    username: string,
    visibility: UserProfileVisibility,
    name: string,
    searchName: string,
    profileImage?:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserImageSubscriptionVariables = {
  filter?: ModelSubscriptionUserImageFilterInput | null,
};

export type OnCreateUserImageSubscription = {
  onCreateUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserImageSubscriptionVariables = {
  filter?: ModelSubscriptionUserImageFilterInput | null,
};

export type OnUpdateUserImageSubscription = {
  onUpdateUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserImageSubscriptionVariables = {
  filter?: ModelSubscriptionUserImageFilterInput | null,
};

export type OnDeleteUserImageSubscription = {
  onDeleteUserImage?:  {
    __typename: "UserImage",
    id: string,
    username: string,
    image:  {
      __typename: "Image",
      storageKey: string,
      alt: string,
      searchAlt: string,
      caption?: string | null,
      searchCaption?: string | null,
      detail?: string | null,
      searchDetail?: string | null,
    },
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
    username: string,
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
    username: string,
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
    username: string,
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

export type OnCreateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type OnUpdateTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type OnDeleteTeamSubscriptionVariables = {
  filter?: ModelSubscriptionTeamFilterInput | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    searchName: string,
    visibility: TeamVisibility,
    teamType: TeamType,
    customTeamType?: string | null,
    description: string,
    teamMembers?:  {
      __typename: "ModelTeamMemberConnection",
      items:  Array< {
        __typename: "TeamMember",
        id: string,
        teamId: string,
        username: string,
        role: TeamMemberRole,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    invitations?:  {
      __typename: "ModelTeamInvitationConnection",
      items:  Array< {
        __typename: "TeamInvitation",
        id: string,
        teamId: string,
        role: TeamMemberRole,
        status: TeamInvitationStatus,
        username: string,
        externalEmail?: string | null,
        invitedByUsername?: string | null,
        responseDateTime?: string | null,
        responseComment?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        teamId: string,
        name: string,
        searchName: string,
        description?: string | null,
        searchDescription?: string | null,
        dueDate?: string | null,
        status: TaskStatus,
        priority: TaskPriority,
        completedByUsername?: string | null,
        completedDate?: string | null,
        ownerUsername?: string | null,
        startDate?: string | null,
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

export type OnCreateTeamMemberSubscriptionVariables = {
  filter?: ModelSubscriptionTeamMemberFilterInput | null,
};

export type OnCreateTeamMemberSubscription = {
  onCreateTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTeamMemberSubscriptionVariables = {
  filter?: ModelSubscriptionTeamMemberFilterInput | null,
};

export type OnUpdateTeamMemberSubscription = {
  onUpdateTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTeamMemberSubscriptionVariables = {
  filter?: ModelSubscriptionTeamMemberFilterInput | null,
};

export type OnDeleteTeamMemberSubscription = {
  onDeleteTeamMember?:  {
    __typename: "TeamMember",
    id: string,
    teamId: string,
    username: string,
    role: TeamMemberRole,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTeamInvitationSubscriptionVariables = {
  filter?: ModelSubscriptionTeamInvitationFilterInput | null,
};

export type OnCreateTeamInvitationSubscription = {
  onCreateTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTeamInvitationSubscriptionVariables = {
  filter?: ModelSubscriptionTeamInvitationFilterInput | null,
};

export type OnUpdateTeamInvitationSubscription = {
  onUpdateTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTeamInvitationSubscriptionVariables = {
  filter?: ModelSubscriptionTeamInvitationFilterInput | null,
};

export type OnDeleteTeamInvitationSubscription = {
  onDeleteTeamInvitation?:  {
    __typename: "TeamInvitation",
    id: string,
    teamId: string,
    role: TeamMemberRole,
    status: TeamInvitationStatus,
    username: string,
    externalEmail?: string | null,
    invitedByUsername?: string | null,
    responseDateTime?: string | null,
    responseComment?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  filter?: ModelSubscriptionTaskFilterInput | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    teamId: string,
    name: string,
    searchName: string,
    description?: string | null,
    searchDescription?: string | null,
    dueDate?: string | null,
    status: TaskStatus,
    priority: TaskPriority,
    completedByUsername?: string | null,
    completedDate?: string | null,
    comments?:  {
      __typename: "ModelTaskCommentConnection",
      items:  Array< {
        __typename: "TaskComment",
        id: string,
        taskId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ownerUsername?: string | null,
    startDate?: string | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      searchName: string,
      visibility: TeamVisibility,
      teamType: TeamType,
      customTeamType?: string | null,
      description: string,
      teamMembers?:  {
        __typename: "ModelTeamMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      invitations?:  {
        __typename: "ModelTeamInvitationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTaskCommentSubscriptionVariables = {
  filter?: ModelSubscriptionTaskCommentFilterInput | null,
};

export type OnCreateTaskCommentSubscription = {
  onCreateTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTaskCommentSubscriptionVariables = {
  filter?: ModelSubscriptionTaskCommentFilterInput | null,
};

export type OnUpdateTaskCommentSubscription = {
  onUpdateTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTaskCommentSubscriptionVariables = {
  filter?: ModelSubscriptionTaskCommentFilterInput | null,
};

export type OnDeleteTaskCommentSubscription = {
  onDeleteTaskComment?:  {
    __typename: "TaskComment",
    id: string,
    taskId: string,
    comment:  {
      __typename: "Comment",
      comment: string,
      searchComment: string,
      postedByUsername: string,
    },
    task?:  {
      __typename: "Task",
      id: string,
      teamId: string,
      name: string,
      searchName: string,
      description?: string | null,
      searchDescription?: string | null,
      dueDate?: string | null,
      status: TaskStatus,
      priority: TaskPriority,
      completedByUsername?: string | null,
      completedDate?: string | null,
      comments?:  {
        __typename: "ModelTaskCommentConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ownerUsername?: string | null,
      startDate?: string | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        searchName: string,
        visibility: TeamVisibility,
        teamType: TeamType,
        customTeamType?: string | null,
        description: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
