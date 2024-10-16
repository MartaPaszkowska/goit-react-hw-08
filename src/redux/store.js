import { configureStore } from "@reduxjs/toolkit"
import { contactsReducer } from "../redux/contacts/slice"
import filterReducer from "../redux/filters/slice"
import { authReducer } from "./auth/slice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistedAuthReducer =
{
    key: 'jwt-token',
    storage,
    whitelist: ["token"]
};


export const store = configureStore({
    reducer: {
        auth: persistReducer(persistedAuthReducer, authReducer),
        contacts: contactsReducer,
        filters: filterReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)