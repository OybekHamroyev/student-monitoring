import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});
export const { setUser, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
