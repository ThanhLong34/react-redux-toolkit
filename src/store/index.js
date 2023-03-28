import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";

const rootReducer = {
	job: jobReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
