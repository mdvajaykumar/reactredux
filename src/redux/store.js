import { createStore } from "redux";

const initState = {
  message: "hello AjayKumar",
  counter: 100,
  list: [],
};

function AppReducer(state = initState, action) {
  switch (action.type) {
    case "Inc":
      return { ...state, counter: state.counter + 1 };

    case "Post_Tweet":
      const newList = [action.payload, ...state.list];
      return { ...state, list: newList };

    default:
      return state;
  }
}

export const store = createStore(AppReducer);
