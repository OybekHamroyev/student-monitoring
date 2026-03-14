import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
  [key: string]: any
}

interface FiltersState {
  activeFilters: FilterState
}

const initialState: FiltersState = {
  activeFilters: {},
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: string; value: any }>) => {
      state.activeFilters[action.payload.key] = action.payload.value
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      delete state.activeFilters[action.payload]
    },
    clearFilters: (state) => {
      state.activeFilters = {}
    },
    setFilters: (state, action: PayloadAction<FilterState>) => {
      state.activeFilters = action.payload
    },
  },
})

export const { setFilter, removeFilter, clearFilters, setFilters } = filtersSlice.actions
export default filtersSlice.reducer
