import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer/index";
import thunkMiddleware from "redux-thunk";

const middleware = applyMiddleware(thunkMiddleware);
export default createStore(reducer, middleware);
