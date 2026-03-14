import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    openDialogs: {},
};
const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        openDialog: (state, action) => {
            state.openDialogs[action.payload] = true;
        },
        closeDialog: (state, action) => {
            state.openDialogs[action.payload] = false;
        },
        toggleDialog: (state, action) => {
            state.openDialogs[action.payload] = !state.openDialogs[action.payload];
        },
    },
});
export const { openDialog, closeDialog, toggleDialog } = dialogsSlice.actions;
export default dialogsSlice.reducer;
