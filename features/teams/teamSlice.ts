import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TeamWithUserRole } from "features/user/userSlice"
import _ from "lodash"
import { Task, TeamContact, TeamEvent, TeamImage, TeamInvitation, TeamMember, TeamProject } from "src/models"

export type TeamMemberWithName = TeamMember & { name: string }

interface TeamSliceState {
  team?: TeamWithUserRole
  members: TeamMemberWithName[]
  tasks: Task[]
  projects: TeamProject[]
  images: TeamImage[]
  contacts: TeamContact[]
  events: TeamEvent[]
  invitations: TeamInvitation[]
}

const initialState: TeamSliceState = {
  team: undefined,
  members: [],
  tasks: [],
  projects: [],
  images: [],
  contacts: [],
  events: [],
  invitations: [],
}

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam(state, action: PayloadAction<TeamWithUserRole | undefined>) {
      const { payload } = action
      if (!payload) {
        state = initialState
      } else {
        if (!_.isEqual(payload, state.team)) {
          state.team = payload
        }
      }
    },
    setTeamMembers(state, action: PayloadAction<TeamMemberWithName[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.members)) {
        state.members = payload
      }
    },
    setTeamTasks(state, action: PayloadAction<Task[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.tasks)) {
        state.tasks = payload
      }
    },
    setTeamProjects(state, action: PayloadAction<TeamProject[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.projects)) {
        state.projects = payload
      }
    },
    setTeamImages(state, action: PayloadAction<TeamImage[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.images)) {
        state.images = payload
      }
    },
    setTeamContacts(state, action: PayloadAction<TeamContact[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.contacts)) {
        state.contacts = payload
      }
    },
    setTeamEvents(state, action: PayloadAction<TeamEvent[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.events)) {
        state.events = payload
      }
    },
    setTeamInvitations(state, action: PayloadAction<TeamInvitation[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.invitations)) {
        state.invitations = payload
      }
    },
  }
})

export const {
  setTeam,
  setTeamMembers,
  setTeamTasks,
  setTeamProjects,
  setTeamImages,
  setTeamContacts,
  setTeamEvents,
  setTeamInvitations,
} = teamSlice.actions

export default teamSlice.reducer