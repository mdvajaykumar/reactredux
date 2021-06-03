import { Tweet } from "../action/AppActionType";

const initState = {
  list: [],
};

export function tweetReducer(state = initState, action) {
  switch (action.type) {
    case Tweet:
      const newList = [action.payload, ...state.list];
      return { ...state, list: newList };

    default:
      return state;
  }
}
