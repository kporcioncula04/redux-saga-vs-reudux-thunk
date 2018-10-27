import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer/index";
//import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
export default createStore(reducer, middleware);
sagaMiddleware.run(rootSaga);
