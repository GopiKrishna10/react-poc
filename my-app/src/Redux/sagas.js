import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const fetchedData = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
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