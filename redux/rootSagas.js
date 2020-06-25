import { all } from 'redux-saga/effects';
import { trumpWatcherSaga, hillaryWatcherSaga } from './feedSaga';

export default function* rootSaga() {
  yield all([
    trumpWatcherSaga(),
    hillaryWatcherSaga()
  ]);
}