import axios from "axios";
import {
  all,
  fork,
  take,
  call,
  put,
  takeEvery,
  takeLatest,
  throttle,
  delay,
} from "redux-saga/effects";

import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "../reducers/post";

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    yield delay(1000);
    // const result = yield call(addPostAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      error: err.response.data,
    });
  }
}

function addCommentAPI() {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment() {
  try {
    yield delay(1000);
    // const result = yield call(addCommentAPI);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield throttle(ADD_POST_REQUEST, addPost, 10000);
}
function* watchAddComment() {
  yield throttle(ADD_COMMENT_REQUEST, addComment, 10000);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
