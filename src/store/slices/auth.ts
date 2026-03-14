import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserRole = 'tutor' | 'vice_dean' | 'dean' | 'admin'

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  isLoading: boolean
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const { setUser, logout, setLoading } = authSlice.actions
export default authSlice.reducer
