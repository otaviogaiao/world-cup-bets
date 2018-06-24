import ActionTypes from "../sagas/actionTypes";
const INITIAL_STATE = {
  displayName: null,
  email: null,
  metadata: null,
  photoURL: null,
  refreshToken: null
};

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        displayName: action.displayName,
        email: action.email,
        metadata: action.metadata,
        photoURL: action.photoURL,
        refreshToken: action.refreshToken
      };
    default:
      return state;
  }
}

export default userReducer;
