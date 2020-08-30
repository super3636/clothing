import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootSaga from "./root.sagas";
import rootReducer from "./root-reducer";
import createSagaMiddleWare from "redux-saga";
//import { fetchCollectionsStart } from "./shop/shop.sagas";
const sagaMiddleWare = createSagaMiddleWare();
const middleWare = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));
sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);
export default { store, persistor };
