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
      profileImage {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
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
      profileImage {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
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
      profileImage {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
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
export const onCreateUserImage = /* GraphQL */ `
  subscription OnCreateUserImage(
    $filter: ModelSubscriptionUserImageFilterInput
  ) {
    onCreateUserImage(filter: $filter) {
      id
      userProfileId
      image {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserImage = /* GraphQL */ `
  subscription OnUpdateUserImage(
    $filter: ModelSubscriptionUserImageFilterInput
  ) {
    onUpdateUserImage(filter: $filter) {
      id
      userProfileId
      image {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserImage = /* GraphQL */ `
  subscription OnDeleteUserImage(
    $filter: ModelSubscriptionUserImageFilterInput
  ) {
    onDeleteUserImage(filter: $filter) {
      id
      userProfileId
      image {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
      id
      name
      searchName
      visibility
      teamType
      customTeamType
      description
      teamMembers {
        items {
          id
          teamId
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamMemberUserProfileId
        }
        nextToken
        startedAt
      }
      invitations {
        items {
          id
          teamId
          role
          status
          externalEmail
          responseDateTime
          responseComment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamInvitationUserProfileId
          teamInvitationInvitedByUserId
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
      id
      name
      searchName
      visibility
      teamType
      customTeamType
      description
      teamMembers {
        items {
          id
          teamId
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamMemberUserProfileId
        }
        nextToken
        startedAt
      }
      invitations {
        items {
          id
          teamId
          role
          status
          externalEmail
          responseDateTime
          responseComment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamInvitationUserProfileId
          teamInvitationInvitedByUserId
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
      id
      name
      searchName
      visibility
      teamType
      customTeamType
      description
      teamMembers {
        items {
          id
          teamId
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamMemberUserProfileId
        }
        nextToken
        startedAt
      }
      invitations {
        items {
          id
          teamId
          role
          status
          externalEmail
          responseDateTime
          responseComment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamInvitationUserProfileId
          teamInvitationInvitedByUserId
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
export const onCreateTeamMember = /* GraphQL */ `
  subscription OnCreateTeamMember(
    $filter: ModelSubscriptionTeamMemberFilterInput
  ) {
    onCreateTeamMember(filter: $filter) {
      id
      teamId
      userProfile {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberUserProfileId
    }
  }
`;
export const onUpdateTeamMember = /* GraphQL */ `
  subscription OnUpdateTeamMember(
    $filter: ModelSubscriptionTeamMemberFilterInput
  ) {
    onUpdateTeamMember(filter: $filter) {
      id
      teamId
      userProfile {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberUserProfileId
    }
  }
`;
export const onDeleteTeamMember = /* GraphQL */ `
  subscription OnDeleteTeamMember(
    $filter: ModelSubscriptionTeamMemberFilterInput
  ) {
    onDeleteTeamMember(filter: $filter) {
      id
      teamId
      userProfile {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamMemberUserProfileId
    }
  }
`;
export const onCreateTeamInvitation = /* GraphQL */ `
  subscription OnCreateTeamInvitation(
    $filter: ModelSubscriptionTeamInvitationFilterInput
  ) {
    onCreateTeamInvitation(filter: $filter) {
      id
      teamId
      role
      status
      userProfile {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      externalEmail
      invitedByUser {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      responseDateTime
      responseComment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamInvitationUserProfileId
      teamInvitationInvitedByUserId
    }
  }
`;
export const onUpdateTeamInvitation = /* GraphQL */ `
  subscription OnUpdateTeamInvitation(
    $filter: ModelSubscriptionTeamInvitationFilterInput
  ) {
    onUpdateTeamInvitation(filter: $filter) {
      id
      teamId
      role
      status
      userProfile {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      externalEmail
      invitedByUser {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      responseDateTime
      responseComment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamInvitationUserProfileId
      teamInvitationInvitedByUserId
    }
  }
`;
export const onDeleteTeamInvitation = /* GraphQL */ `
  subscription OnDeleteTeamInvitation(
    $filter: ModelSubscriptionTeamInvitationFilterInput
  ) {
    onDeleteTeamInvitation(filter: $filter) {
      id
      teamId
      role
      status
      userProfile {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      externalEmail
      invitedByUser {
        id
        userId
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
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
      responseDateTime
      responseComment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamInvitationUserProfileId
      teamInvitationInvitedByUserId
    }
  }
`;
