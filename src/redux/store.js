import { createStore } from "redux";

const initState = {
  message: "hello AjayKumar",
  counter: 0,
  list: [],
};

function AppReducer(state = initState, action) {
  return state;
}

export const store = createStore(AppReducer);
