import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    activeFilters: {},
};
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.activeFilters[action.payload.key] = action.payload.value;
        },
        removeFilter: (state, action) => {
            delete state.activeFilters[action.payload];
        },
        clearFilters: (state) => {
            state.activeFilters = {};
        },
        setFilters: (state, action) => {
            state.activeFilters = action.payload;
        },
    },
});
export const { setFilter, removeFilter, clearFilters, setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
