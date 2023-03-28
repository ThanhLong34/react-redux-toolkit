import { combineReducers } from "redux";
import jobReducer from "./job";
// import other reducer ...

const rootReducer = combineReducers({
	job: jobReducer,
	// other reducer ...
});

export default rootReducer;
