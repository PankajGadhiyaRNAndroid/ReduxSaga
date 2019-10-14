import { all } from 'redux-saga/effects';
import actionWatcher from './usersaga/Usersaga';

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}