import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"

export type ContextArea = "Home" | "User" | "Team"

interface ContextSliceState {
  area: ContextArea
}

const initialState: ContextSliceState = {
  area: "Home"
}

const contextSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setContextArea(state, action: PayloadAction<ContextArea>) {
      const { payload } = action
      if (!_.isEqual(payload, state.area)) {
        state.area = payload
      }
    },
  }
})

export const {
  setContextArea,
} = contextSlice.actions

export default contextSlice.reducer
