import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducers";
import { defaultLocation } from "../constants/LocationConstants";

const persistConfig = { key: "root", storage };
const PersistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  PersistedReducer,
  { LocReducer: defaultLocation, RestaurantReducer: null },
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);
