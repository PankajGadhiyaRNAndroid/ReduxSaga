import { put, takeLatest, delay } from 'redux-saga/effects';

function* fetchNews() {
    const json = yield fetch('https://randomuser.me/api/').then(response => response.json());

    yield delay(1000);
    yield put({
        type: "NEWS_RECEIVED",
        json: json.results,
    });
}

export default function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}