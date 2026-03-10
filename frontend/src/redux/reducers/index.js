import { combineReducers } from "redux"
import authReducer from "./authReducer.js"

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;