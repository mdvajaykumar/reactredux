import { Inc } from "../action/AppActionType";

const initState = {
  counter: 100,
};

export function counterReducer(state = initState, action) {
  switch (action.type) {
    case Inc:
      return { ...state, counter: state.counter + 1 };

    default:
      return state;
  }
}
