import { configureStore } from "@reduxjs/toolkit"
import teamsReducer, { fetchTeams } from "features/teams/teamsSlice"

const store = {
  ...configureStore({
    reducer: {
      teams: teamsReducer
    },
    middleware: function (getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false
      })
    },
  }),
  ...{
    loadData: () => fetchTeams(),
    fetchTeams,
  }
}

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch