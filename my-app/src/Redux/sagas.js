import { put, takeLatest, all } from 'redux-saga/effects';
import {url} from '../sharedContent';
function* fetchNews() {

  const fetchedData = yield fetch(url)
    .then(response => response.json());
  yield put({ type: "NEWS_RECEIVED", data: fetchedData.articles || [{ error: fetchedData.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_DATA', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}