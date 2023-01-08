/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createUserImage = /* GraphQL */ `
  mutation CreateUserImage(
    $input: CreateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    createUserImage(input: $input, condition: $condition) {
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
export const updateUserImage = /* GraphQL */ `
  mutation UpdateUserImage(
    $input: UpdateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    updateUserImage(input: $input, condition: $condition) {
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
export const deleteUserImage = /* GraphQL */ `
  mutation DeleteUserImage(
    $input: DeleteUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    deleteUserImage(input: $input, condition: $condition) {
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
export const createUserSkill = /* GraphQL */ `
  mutation CreateUserSkill(
    $input: CreateUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    createUserSkill(input: $input, condition: $condition) {
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
export const updateUserSkill = /* GraphQL */ `
  mutation UpdateUserSkill(
    $input: UpdateUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    updateUserSkill(input: $input, condition: $condition) {
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
export const deleteUserSkill = /* GraphQL */ `
  mutation DeleteUserSkill(
    $input: DeleteUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    deleteUserSkill(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createUserInterest = /* GraphQL */ `
  mutation CreateUserInterest(
    $input: CreateUserInterestInput!
    $condition: ModelUserInterestConditionInput
  ) {
    createUserInterest(input: $input, condition: $condition) {
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
export const updateUserInterest = /* GraphQL */ `
  mutation UpdateUserInterest(
    $input: UpdateUserInterestInput!
    $condition: ModelUserInterestConditionInput
  ) {
    updateUserInterest(input: $input, condition: $condition) {
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
export const deleteUserInterest = /* GraphQL */ `
  mutation DeleteUserInterest(
    $input: DeleteUserInterestInput!
    $condition: ModelUserInterestConditionInput
  ) {
    deleteUserInterest(input: $input, condition: $condition) {
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
export const createInterest = /* GraphQL */ `
  mutation CreateInterest(
    $input: CreateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    createInterest(input: $input, condition: $condition) {
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
export const updateInterest = /* GraphQL */ `
  mutation UpdateInterest(
    $input: UpdateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    updateInterest(input: $input, condition: $condition) {
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
export const deleteInterest = /* GraphQL */ `
  mutation DeleteInterest(
    $input: DeleteInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    deleteInterest(input: $input, condition: $condition) {
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
export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
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
export const updateUserNotification = /* GraphQL */ `
  mutation UpdateUserNotification(
    $input: UpdateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    updateUserNotification(input: $input, condition: $condition) {
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
export const deleteUserNotification = /* GraphQL */ `
  mutation DeleteUserNotification(
    $input: DeleteUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    deleteUserNotification(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createTeamMember = /* GraphQL */ `
  mutation CreateTeamMember(
    $input: CreateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    createTeamMember(input: $input, condition: $condition) {
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
export const updateTeamMember = /* GraphQL */ `
  mutation UpdateTeamMember(
    $input: UpdateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    updateTeamMember(input: $input, condition: $condition) {
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
export const deleteTeamMember = /* GraphQL */ `
  mutation DeleteTeamMember(
    $input: DeleteTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    deleteTeamMember(input: $input, condition: $condition) {
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
export const createTeamInvitation = /* GraphQL */ `
  mutation CreateTeamInvitation(
    $input: CreateTeamInvitationInput!
    $condition: ModelTeamInvitationConditionInput
  ) {
    createTeamInvitation(input: $input, condition: $condition) {
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
export const updateTeamInvitation = /* GraphQL */ `
  mutation UpdateTeamInvitation(
    $input: UpdateTeamInvitationInput!
    $condition: ModelTeamInvitationConditionInput
  ) {
    updateTeamInvitation(input: $input, condition: $condition) {
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
export const deleteTeamInvitation = /* GraphQL */ `
  mutation DeleteTeamInvitation(
    $input: DeleteTeamInvitationInput!
    $condition: ModelTeamInvitationConditionInput
  ) {
    deleteTeamInvitation(input: $input, condition: $condition) {
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
