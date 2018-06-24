import { createStore, applyMiddleware, compose } from "redux";
import { autoMergeLevel2 } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { persistStore, persistReducer } from "redux-persist";

import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";

import {
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor
} from "react-navigation-redux-helpers";

import reducers from "../reducers";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const middlewares = [middleware, sagaMiddleware];

const persistConfig = {
  key: "root2",
  blacklist: ["User"],
  storage, //ainda da pra passar o nome do keychain e da sharedPreferences se quiser
  keyPrefix: "WorldCup:",
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares))
);

const persistor = persistStore(store, null);

sagaMiddleware.run(rootSaga);

export { store, persistor };
