import { Inc, Tweet } from "./AppActionType";

export function incrementAction() {
  return { type: Inc };
}

export function addTweet(payload) {
  return { type: Tweet, payload: payload };
}
