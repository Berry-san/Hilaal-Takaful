import { createSlice } from '@reduxjs/toolkit'

const auth = createSlice({
  name: 'auth',
  initialState: {
    user: { isAuthenticated: false },
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload
    },
    logOut: () => {
      return initialState
    },
  },
})

export const { loginSuccess, logOut } = auth.actions
export const selectUser = (state) => state.auth.user
export default auth.reducer
