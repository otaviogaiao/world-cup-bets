import ActioType from "./actionTypes";

class ActionCreator {
  static login(displayName, email, metadata, photoURL, refreshToken) {
    return {
      type: ActionType.LOGIN,
      displayName,
      email,
      metadata,
      photoURL,
      refreshToken
    };
  }
}

export default ActionCreator;
