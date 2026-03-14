import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mode: 'system',
};
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.mode = action.payload;
            localStorage.setItem('theme', action.payload);
            if (action.payload === 'dark' ||
                (action.payload === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            }
            else {
                document.documentElement.classList.remove('dark');
            }
        },
    },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
