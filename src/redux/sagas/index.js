import axios from "axios";
import {
  SEARCH_BAR_TEXT_CHANGED,
  userDataReceived,
  userFetchingSucceeded,
  userFetchingFailed
} from "../reducer/index";
import { takeEvery, call, all, put } from "redux-saga/effects";
function* getUserSuggestions(action) {
  try {
    const { data } = yield call(
      axios.get,
      `https://api.github.com/search/users?q=${action.payload}`
    );

    if (data.items.length) {
      yield put(userFetchingSucceeded());
      yield put(userDataReceived(data.items));
    }
  } catch (err) {
    yield put(userFetchingFailed());
  }
}
function* searchUserWatcher() {
  yield takeEvery(SEARCH_BAR_TEXT_CHANGED, getUserSuggestions);
}

export default function* rootSaga() {
  yield all([searchUserWatcher()]);
}
