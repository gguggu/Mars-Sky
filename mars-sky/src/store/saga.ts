import { getWeather } from 'api/module/weather';
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchWeather() {
  try {
    const weathers = yield call(getWeather)
    yield put({ type: 'WEATHER_FETCH_SUCCESS', payload: { weathers: weathers.data } })
  } catch (error) {
    yield put({ type: 'WEATHER_FETCH_FAILURE', payload: { message: error.message } })
  }
}

export default function* saga() {
  yield takeEvery('WEATHER_FETCH_REQUEST', fetchWeather);
}