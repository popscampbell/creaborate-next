import { configureStore } from "@reduxjs/toolkit"
import contextReducer from "features/contextSlice"
import teamReducer from "features/teams/teamSlice"
import userReducer from "features/user/userSlice"

const store = {
  ...configureStore({
    reducer: {
      context: contextReducer,
      user: userReducer,
      team: teamReducer,
    },
    middleware: function (getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false
      })
    },
  }),
}

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch