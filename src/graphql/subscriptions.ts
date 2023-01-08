/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
export const onCreateUserSkill = /* GraphQL */ `
  subscription OnCreateUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
  ) {
    onCreateUserSkill(filter: $filter) {
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
export const onUpdateUserSkill = /* GraphQL */ `
  subscription OnUpdateUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
  ) {
    onUpdateUserSkill(filter: $filter) {
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
export const onDeleteUserSkill = /* GraphQL */ `
  subscription OnDeleteUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
  ) {
    onDeleteUserSkill(filter: $filter) {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
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
export const onCreateUserInterest = /* GraphQL */ `
  subscription OnCreateUserInterest(
    $filter: ModelSubscriptionUserInterestFilterInput
  ) {
    onCreateUserInterest(filter: $filter) {
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
export const onUpdateUserInterest = /* GraphQL */ `
  subscription OnUpdateUserInterest(
    $filter: ModelSubscriptionUserInterestFilterInput
  ) {
    onUpdateUserInterest(filter: $filter) {
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
export const onDeleteUserInterest = /* GraphQL */ `
  subscription OnDeleteUserInterest(
    $filter: ModelSubscriptionUserInterestFilterInput
  ) {
    onDeleteUserInterest(filter: $filter) {
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
export const onCreateInterest = /* GraphQL */ `
  subscription OnCreateInterest($filter: ModelSubscriptionInterestFilterInput) {
    onCreateInterest(filter: $filter) {
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
export const onUpdateInterest = /* GraphQL */ `
  subscription OnUpdateInterest($filter: ModelSubscriptionInterestFilterInput) {
    onUpdateInterest(filter: $filter) {
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
export const onDeleteInterest = /* GraphQL */ `
  subscription OnDeleteInterest($filter: ModelSubscriptionInterestFilterInput) {
    onDeleteInterest(filter: $filter) {
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
export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onCreateUserNotification(filter: $filter) {
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
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onUpdateUserNotification(filter: $filter) {
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
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onDeleteUserNotification(filter: $filter) {
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
