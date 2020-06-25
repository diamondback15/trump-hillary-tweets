import axios from 'axios';
import { getTrumpTweets, getHillaryTweets } from './actions/feedActions';
import { takeLatest, call, put } from 'redux-saga/effects';

function* getTrumpTweetsSaga(action) {
  try {
    let { data } = yield call(axios.get, 'http://localhost:3000/api/trump')
    yield put(getTrumpTweets(data.tweets))
  } catch (e) {
    console.log(e)
  }
}

export function* trumpWatcherSaga() {
  yield takeLatest('GET_TRUMP_TWEETS', getTrumpTweetsSaga);
}

function* getHillaryTweetsSaga(action) {
  try {
    let { data } = yield call(axios.get, 'http://localhost:3000/api/hillary')
    yield put(getHillaryTweets(data.tweets))
  } catch (e) {
    console.log(e)
  }
}

export function* hillaryWatcherSaga() {
  yield takeLatest('GET_HILLARY_TWEETS', getHillaryTweetsSaga);
}