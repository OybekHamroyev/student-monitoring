import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  mode: Theme
}

const initialState: ThemeState = {
  mode: 'system',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload
      localStorage.setItem('theme', action.payload)
      if (action.payload === 'dark' || 
          (action.payload === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
