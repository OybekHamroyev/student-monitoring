import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DialogState {
  [key: string]: boolean
}

interface DialogsState {
  openDialogs: DialogState
}

const initialState: DialogsState = {
  openDialogs: {},
}

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<string>) => {
      state.openDialogs[action.payload] = true
    },
    closeDialog: (state, action: PayloadAction<string>) => {
      state.openDialogs[action.payload] = false
    },
    toggleDialog: (state, action: PayloadAction<string>) => {
      state.openDialogs[action.payload] = !state.openDialogs[action.payload]
    },
  },
})

export const { openDialog, closeDialog, toggleDialog } = dialogsSlice.actions
export default dialogsSlice.reducer
