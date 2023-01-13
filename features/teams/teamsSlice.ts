import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import store, { RootState } from "app/store"
import { DataStore, Predicates } from "aws-amplify"
import React from "react"
import { Team, TeamMember, TeamType, TeamVisibility } from "src/models"

interface TeamsState {
  teams: Team[]
}

const initialState: TeamsState = { teams: [] }

export interface CreateTeamProps {
  name: string
  description: string
  teamType?: TeamType
  visibility?: TeamVisibility
  teamMembers?: TeamMember[]
}

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setTeams(state, action: PayloadAction<Team[]>) {
      if (action.payload) state.teams = action.payload
    },
    createTeam(state, action: PayloadAction<CreateTeamProps>) {
      const searchName = action.payload.name.toLowerCase()
      const newTeamProps = {
        ...action.payload, ...{
          searchName,
          teamType: action.payload.teamType ?? TeamType.BAND,
          visibility: action.payload.visibility ?? TeamVisibility.PUBLIC,
        }
      }

      state.teams.push(new Team(newTeamProps))
    }
  }
})

export function fetchTeams() {
  React.useEffect(() => {
    DataStore.query(Team, Predicates.ALL)
      .then(teams => store.dispatch(setTeams(teams)))
  }, [])
}

export const { createTeam, setTeams } = teamsSlice.actions

export function getAll(state: RootState) {
  return state.teams
}

export default teamsSlice.reducer
