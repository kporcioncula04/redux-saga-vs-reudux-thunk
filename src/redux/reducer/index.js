export const initialState = {
  searchBarText: "",
  users: [],
  isError: false
};

export const SEARCH_BAR_TEXT_CHANGED = "SEARCH_BAR_TEXT_CHANGED";
export const USER_SUGGESTION_RECEIVED = "USER_SUGGESTION_RECEIVED";
export const USER_FETCHING_SUCCEEDED = "USER_FETCHING_SUCCEEDED";
export const USER_FETCHING_FAILED = "USER_FETCHING_FAILED";

export const updateSearchBarText = text => ({
  type: SEARCH_BAR_TEXT_CHANGED,
  payload: text
});

export const userDataReceived = users => ({
  type: USER_SUGGESTION_RECEIVED,
  payload: users
});

export const userFetchingSucceeded = () => ({
  type: USER_FETCHING_SUCCEEDED
});
export const userFetchingFailed = () => ({
  type: USER_FETCHING_FAILED
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BAR_TEXT_CHANGED:
      return { ...state, searchBarText: action.payload };
    case USER_SUGGESTION_RECEIVED:
      return { ...state, users: action.payload };
    case USER_FETCHING_SUCCEEDED:
      return { ...state, isError: false };
    case USER_FETCHING_FAILED:
      return { ...state, isError: true };
    default:
      return state;
  }
};
