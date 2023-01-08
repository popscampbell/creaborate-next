import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum UserProfileVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED"
}

export enum UserNotificationLevel {
  NORMAL = "NORMAL",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR"
}



type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly visibility: UserProfileVisibility | keyof typeof UserProfileVisibility;
  readonly name: string;
  readonly searchName: string;
  readonly tagline?: string | null;
  readonly about?: string | null;
  readonly interests?: (UserInterest | null)[] | null;
  readonly skills?: (UserSkill | null)[] | null;
  readonly notifications?: (UserNotification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly visibility: UserProfileVisibility | keyof typeof UserProfileVisibility;
  readonly name: string;
  readonly searchName: string;
  readonly tagline?: string | null;
  readonly about?: string | null;
  readonly interests: AsyncCollection<UserInterest>;
  readonly skills: AsyncCollection<UserSkill>;
  readonly notifications: AsyncCollection<UserNotification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerUserInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInterest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly interest: Interest;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInterestInterestId: string;
}

type LazyUserInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInterest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly interest: AsyncItem<Interest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInterestInterestId: string;
}

export declare type UserInterest = LazyLoading extends LazyLoadingDisabled ? EagerUserInterest : LazyUserInterest

export declare const UserInterest: (new (init: ModelInit<UserInterest>) => UserInterest) & {
  copyOf(source: UserInterest, mutator: (draft: MutableModel<UserInterest>) => MutableModel<UserInterest> | void): UserInterest;
}

type EagerInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Interest = LazyLoading extends LazyLoadingDisabled ? EagerInterest : LazyInterest

export declare const Interest: (new (init: ModelInit<Interest>) => Interest) & {
  copyOf(source: Interest, mutator: (draft: MutableModel<Interest>) => MutableModel<Interest> | void): Interest;
}

type EagerUserSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSkill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly skill: Skill;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSkillSkillId: string;
}

type LazyUserSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSkill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly skill: AsyncItem<Skill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSkillSkillId: string;
}

export declare type UserSkill = LazyLoading extends LazyLoadingDisabled ? EagerUserSkill : LazyUserSkill

export declare const UserSkill: (new (init: ModelInit<UserSkill>) => UserSkill) & {
  copyOf(source: UserSkill, mutator: (draft: MutableModel<UserSkill>) => MutableModel<UserSkill> | void): UserSkill;
}

type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skill = LazyLoading extends LazyLoadingDisabled ? EagerSkill : LazySkill

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}

type EagerUserNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly message: string;
  readonly level: UserNotificationLevel | keyof typeof UserNotificationLevel;
  readonly displayedAt?: string | null;
  readonly heading?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly message: string;
  readonly level: UserNotificationLevel | keyof typeof UserNotificationLevel;
  readonly displayedAt?: string | null;
  readonly heading?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserNotification = LazyLoading extends LazyLoadingDisabled ? EagerUserNotification : LazyUserNotification

export declare const UserNotification: (new (init: ModelInit<UserNotification>) => UserNotification) & {
  copyOf(source: UserNotification, mutator: (draft: MutableModel<UserNotification>) => MutableModel<UserNotification> | void): UserNotification;
}