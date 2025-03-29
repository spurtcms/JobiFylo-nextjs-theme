import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import rootReducer from './rootReducers';
import storage from "./customStorage";



const persistConfig = {
  key: "root",
  storage,
  blacklist: ["register"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


// export function makeStore() {
//   return configureStore({
//     reducer: persistedReducer,
//     middleware: function (getDefaultMiddleware) {
//       return getDefaultMiddleware();
//     },

//   });
// }
export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}

export function persistAppStore(store) {
  return persistStore(store);
}


