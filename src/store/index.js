import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import uiReducer from './slices/ui';
import themeReducer from './slices/theme';
import dialogReducer from './slices/dialogs';
import notificationReducer from './slices/notifications';
import filterReducer from './slices/filters';
import languageReducer from './slices/language';
const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        theme: themeReducer,
        dialogs: dialogReducer,
        notifications: notificationReducer,
        filters: filterReducer,
        language: languageReducer,
    },
});
export default store;
