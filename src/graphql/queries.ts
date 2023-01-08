/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      userId
      visibility
      name
      searchName
      tagline
      about
      interests {
        items {
          id
          userProfileId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInterestInterestId
        }
        nextToken
        startedAt
      }
      skills {
        items {
          id
          userProfileId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSkillSkillId
        }
        nextToken
        startedAt
      }
      notifications {
        items {
          id
          userProfileId
          message
          level
          displayedAt
          heading
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        visibility
        name
        searchName
        tagline
        about
        interests {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        visibility
        name
        searchName
        tagline
        about
        interests {
          nextToken
          startedAt
        }
        skills {
          nextToken
          startedAt
        }
        notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserSkill = /* GraphQL */ `
  query GetUserSkill($id: ID!) {
    getUserSkill(id: $id) {
      id
      userProfileId
      skill {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSkillSkillId
    }
  }
`;
export const listUserSkills = /* GraphQL */ `
  query ListUserSkills(
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userProfileId
        skill {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSkillSkillId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserSkills = /* GraphQL */ `
  query SyncUserSkills(
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileId
        skill {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSkillSkillId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      searchName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkills = /* GraphQL */ `
  query SyncSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserInterest = /* GraphQL */ `
  query GetUserInterest($id: ID!) {
    getUserInterest(id: $id) {
      id
      userProfileId
      interest {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInterestInterestId
    }
  }
`;
export const listUserInterests = /* GraphQL */ `
  query ListUserInterests(
    $filter: ModelUserInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userProfileId
        interest {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInterestInterestId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserInterests = /* GraphQL */ `
  query SyncUserInterests(
    $filter: ModelUserInterestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileId
        interest {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInterestInterestId
      }
      nextToken
      startedAt
    }
  }
`;
export const getInterest = /* GraphQL */ `
  query GetInterest($id: ID!) {
    getInterest(id: $id) {
      id
      name
      searchName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listInterests = /* GraphQL */ `
  query ListInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInterests = /* GraphQL */ `
  query SyncInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
      id
      userProfileId
      message
      level
      displayedAt
      heading
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileId
        message
        level
        displayedAt
        heading
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserNotifications = /* GraphQL */ `
  query SyncUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileId
        message
        level
        displayedAt
        heading
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userSkillsByUserProfileId = /* GraphQL */ `
  query UserSkillsByUserProfileId(
    $userProfileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSkillsByUserProfileId(
      userProfileId: $userProfileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileId
        skill {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSkillSkillId
      }
      nextToken
      startedAt
    }
  }
`;
export const userInterestsByUserProfileId = /* GraphQL */ `
  query UserInterestsByUserProfileId(
    $userProfileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userInterestsByUserProfileId(
      userProfileId: $userProfileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileId
        interest {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInterestInterestId
      }
      nextToken
      startedAt
    }
  }
`;
export const userNotificationsByUserProfileId = /* GraphQL */ `
  query UserNotificationsByUserProfileId(
    $userProfileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotificationsByUserProfileId(
      userProfileId: $userProfileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileId
        message
        level
        displayedAt
        heading
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
