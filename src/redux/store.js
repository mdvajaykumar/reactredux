import { createStore } from "redux";
import { Inc, Tweet } from "./action/AppActionType";

import { tweetReducer } from "./reducers/tweetReducer";
import { counterReducer } from "./reducers/counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cr: counterReducer,
  tweet: tweetReducer,
});

export const store = createStore(rootReducer);
